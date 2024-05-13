<script lang="ts">
  import { onMount } from "svelte";
  import PixiHelper from "$lib/PixiHelper";
  import * as PIXI from "pixi.js";
  import { tweened } from "svelte/motion";

  export let id: string; // Should be card number with appendix
  export let data: any;
  export let jsonName: string;
  export let spriteSheetPath: string;

  const ImageDisplacementExceptions = [
    {
      number: "3A",
      rotationDisplacement: 2,
    },
    {
      number: "4A",
      rotationDisplacement: 2.5,
    },
    {
      number: "5A",
      rotationDisplacement: 2.5,
    },
    {
      number: "6A",
      rotationDisplacement: 2.5,
    },
    {
      number: "10A",
      rotationDisplacement: 2,
    },
    {
      number: "17A",
      rotationDisplacement: 2.5,
    },
    {
      number: "20A",
      rotationDisplacement: 2,
    },
    {
      number: "29A",
      rotationDisplacement: 2.5,
    },
    {
      number: "34A",
      rotationDisplacement: 2.5,
    },
    {
      number: "35A",
      rotationDisplacement: 2.5,
    },
    {
      number: "41A",
      rotationDisplacement: 2,
    },
    {
      number: "48A",
      rotationDisplacement: 2.5,
    },
  ];

  // Const
  const width: number = 331.5;
  const height: number = 507;
  const scale: number = 0.42;
  const displacementBackgroundOffset: number = 30;
  const animationRotationX: number = 4;
  const maxRotationX: number = 5;
  const defaultRotationalDisplacement: number = 3;

  // Changable
  let displacementCard: number = 3;
  let rotationDisplacement: number = 2;
  let rotationAmountCard: number = 1;
  let rotationDuration: number = 1000;

  // Data
  let cardCharacter: string;
  let cardNumber: number;
  let dataCard: any;
  let init: boolean = false;
  let pLoaderInitted: boolean = false;
  let themeColor: string;
  let playAnimation: boolean = false;

  // PIXI miscellaneous
  let app: PIXI.Application;
  let pixiHelper: PixiHelper;
  let animationTicker: PIXI.Ticker;
  let spritesheetContent: PIXI.Spritesheet | null;
  let spritesheetGeneric: PIXI.Spritesheet | null;
  let ploader: PIXI.Loader;

  // PIXI Containers
  let stage: PIXI.Container = new PIXI.Container();
  let image: PIXI.Container = new PIXI.Container();
  let container: PIXI.Container = new PIXI.Container();
  let foreground: PIXI.Container = new PIXI.Container();
  let foreground2: PIXI.Container = new PIXI.Container();

  let background: PIXI.Container = new PIXI.Container();
  let displacementContainer: PIXI.Container = new PIXI.Container();
  let uiElements: PIXI.Container = new PIXI.Container();

  // PIXI Texts
  let cardCharacterText: PIXI.Text;
  let cardNumberText: PIXI.Text;
  let titleText: PIXI.Text;
  let titleText2: PIXI.Text;
  let subtitleText: PIXI.Text;
  let healthText: PIXI.Text;
  let socialText: PIXI.Text;
  let energyText: PIXI.Text;
  let disneyText: PIXI.Text;

  // PIXI Sprites
  let displacementSprite: PIXI.Sprite;
  let overlayDisplacementSprite: PIXI.Sprite;
  let backgroundDisplacementSprite: PIXI.Sprite;
  let foregroundTextureSprite: PIXI.Sprite;
  let backgroundTextureSprite: PIXI.Sprite;
  let maskOverlapTextureSprite: PIXI.Sprite;
  let frontTextureSprite: PIXI.Sprite;
  let cardSprite: PIXI.Sprite;
  let avatarIconSprite: PIXI.Sprite;
  let iconsSprite: PIXI.Sprite;
  let maskSprite: PIXI.Sprite;
  let shadowSprite: PIXI.Sprite;

  // PIXI Filters
  let displacementFilter: PIXI.DisplacementFilter;
  let backgroundDisplacementFilter: PIXI.DisplacementFilter;
  let overlayDisplacementFilter: PIXI.DisplacementFilter;

  let containerApp: HTMLElement;
  let refApp: HTMLElement;
  let contentSheet: string;
  let genericSheet: string;
  let texturePromise: Promise<Record<string, any>>;
  let assets: Record<string, any>;

  let rotationValue = tweened(0, {
    duration: rotationDuration,
    easing: (t) => t,
  });

  $: if (
    $rotationValue === -animationRotationX ||
    $rotationValue === animationRotationX
  ) {
    rotationValue.set(
      $rotationValue === animationRotationX
        ? -animationRotationX
        : animationRotationX
    );
  }

  $: if (rotationValue) {
    rotationValue.subscribe((value) => {
      rotationAmountCard = value;
    });
  }

  $: if (rotationAmountCard) {
    let displacement = convertRange(
      rotationAmountCard,
      { min: -maxRotationX, max: maxRotationX },
      { min: -displacementCard, max: displacementCard }
    );

    let rotationX = displacementCard; // or rotationAmountCard if that was intended
    let movementX = rotationX * displacement;

    if (displacementFilter != null) {
      displacementFilter.scale.x = -movementX;
      overlayDisplacementFilter.scale.x = -movementX;
      backgroundDisplacementFilter.scale.x = -movementX;
    }

    background.x = -movementX / 2;
    foreground.x = -movementX / 2;
    foreground2.x = -movementX / 2;
  }

  $: if (rotationAmountCard && refApp != null && playAnimation) {
    let rotationAmount = convertRange(
      rotationAmountCard,
      { min: -maxRotationX, max: maxRotationX },
      { min: -maxRotationX, max: maxRotationX }
    );

    containerApp.style.transform = `rotateY(${rotationAmount}deg)`;
  }

  onMount(async () => {
    await initializePixiApp();
    setRotation();
  });

  async function initializePixiApp() {
    if (!app) {
      app = new PIXI.Application();

      await app.init({
        width: width,
        height: height,
        antialias: false,
        resolution: 1,
        autoStart: true,

        backgroundAlpha: 0,
      });

      app.canvas.style.position = "relative";
      app.renderer.view.resize(width / 0.9, height, 1);

      // Append the application canvas to the document body
      refApp.appendChild(app.canvas);
    }

    ploader = new PIXI.Loader();

    let cardNumberString: string = id.slice(0, -1); // Remove last character of ID
    cardNumber = parseInt(cardNumberString); // Convert string to number

    if (cardNumber < 10) {
      cardNumberString = "0" + cardNumber;
    }

    cardCharacter = id.charAt(id.length - 1); // Get the letter from card. Is either A or B.

    pixiHelper = new PixiHelper(app);

    init = true;
    getData();
    addContainers();
    loadTextures();
    setRotationDisplacement();

    animationTicker = PIXI.Ticker.shared.add(animateApp);
  }

  function getData() {
    if (data.id == id) {
      dataCard = data;
      return;
    }

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element.id == id) {
        dataCard = element;
      }
    }
  }

  function setRotationDisplacement() {
    ImageDisplacementExceptions.map((data) => {
      let numberSprite = jsonName.split("-")[0];
      let cardNumber = data.number;

      if (numberSprite == cardNumber) {
        rotationDisplacement = data.rotationDisplacement;
      } else {
        rotationDisplacement = defaultRotationalDisplacement;
      }

      displacementCard = rotationDisplacement;
    });
  }

  function addContainers() {
    app.stage.addChild(container);
    container.addChild(image);
    image.addChild(background);
    image.addChild(foreground);
    container.addChild(foreground2);
    container.addChild(displacementContainer);
    app.stage.addChild(uiElements);
  }

  function loadTextures() {
    playAnimation = true;

    contentSheet = spriteSheetPath + jsonName + ".json";
    genericSheet = spriteSheetPath + "genericCardAssets.json";
    texturePromise = PIXI.Assets.load([contentSheet, genericSheet]);

    texturePromise.then((texture: Record<string, any>) => {
      assets = texture;
      setTextures();
      addChildren();
      setDisplacement();
      setAllTexts();
    });
  }

  function setAllTexts() {
    themeColor = pixiHelper.setHexCodeColor(dataCard.color) as string;

    // Add a special case for the card 24A, because it has 2 lines
    if (id == "24A") {
      let text1 = "La Belle et";
      let text2 = "le Clochard";

      titleText = pixiHelper.setText(text1, "600", 18, "white", 120, 423);
      titleText2 = pixiHelper.setText(text2, "600", 18, "white", 120, 440);
      subtitleText = pixiHelper.setText(
        dataCard.hashTag,
        "400",
        14,
        "white",
        120,
        460
      );

      uiElements.addChild(titleText2);
    } else {
      titleText = pixiHelper.setText(
        dataCard.cardTitle,
        "500",
        20,
        "white",
        120,
        429
      );
      subtitleText = pixiHelper.setText(
        dataCard.hashTag,
        "200",
        14,
        "white",
        120,
        450
      );
    }
    titleText.resolution = 2;

    healthText = pixiHelper.setText(
      dataCard.health,
      "400",
      18,
      "white",
      274,
      188
    );

    healthText.resolution = 2;

    socialText = pixiHelper.setText(
      dataCard.social,
      "400",
      18,
      "white",
      274,
      260
    );

    energyText = pixiHelper.setText(
      dataCard.energy,
      "400",
      18,
      "white",
      274,
      322
    );
    energyText.resolution = 2;

    disneyText = pixiHelper.setText(
      "©Disney/Pixar",
      "200",
      7,
      "black",
      309,
      464,
      -90
    );
    disneyText.resolution = 2;

    uiElements.addChild(titleText);
    uiElements.addChild(subtitleText);
    uiElements.addChild(healthText);
    uiElements.addChild(socialText);
    uiElements.addChild(energyText);
    uiElements.addChild(disneyText);

    // BOLD
    cardNumberText = pixiHelper.setText(
      cardNumber < 10 ? "0" + cardNumber.toString() : cardNumber.toString(),
      "700",
      16,
      themeColor.toString(),
      272,
      33
    );

    cardCharacterText = pixiHelper.setText(
      cardCharacter,
      "700",
      10,
      themeColor.toString(),
      290,
      35
    );

    uiElements.addChild(cardNumberText);
    uiElements.addChild(cardCharacterText);
  }

  // Should be renderApp().
  function animateApp() {
    if (!app) return;
    if (!app.renderer) return;
    if (!pLoaderInitted) return;

    // Render the app each frame for the animation and displacement
    app.renderer.render(stage);
  }

  function destroyTicker() {
    if (PIXI.Ticker.shared) {
      PIXI.Ticker.shared.remove(animateApp);
    }

    if (animationTicker) {
      animationTicker.stop();
      animationTicker.destroy();
    }
  }

  function setTextures() {
    themeColor = pixiHelper.setHexCodeColor(dataCard.color) as string;

    if (assets[contentSheet] == null) return;
    if (assets[genericSheet] == null) return;

    spritesheetContent = assets[contentSheet];
    spritesheetGeneric = assets[genericSheet];

    spritesheetContent = spritesheetContent!;
    spritesheetGeneric = spritesheetGeneric!;

    cardSprite = pixiHelper.setSprite(
      "04-Frame.png",
      0,
      0,
      scale,
      spritesheetGeneric
    );

    maskSprite = pixiHelper.setSprite(
      "BG.png",
      0,
      0,
      scale,
      spritesheetGeneric
    );

    frontTextureSprite = pixiHelper.setSprite(
      "05-Bar.png",
      0,
      0,
      scale,
      spritesheetGeneric
    );

    shadowSprite = pixiHelper.setSprite(
      "07-Shadow.png",
      displacementBackgroundOffset,
      0,
      scale,
      spritesheetGeneric
    );

    iconsSprite = pixiHelper.setSprite(
      "01-Icons.png",
      0,
      0,
      scale,
      spritesheetGeneric
    );

    if (frontTextureSprite) {
      frontTextureSprite.tint = parseInt(themeColor);
    }

    foregroundTextureSprite = pixiHelper.setSprite(
      "06-Back.png",
      -20,
      0,
      scale,
      spritesheetContent
    );

    avatarIconSprite = pixiHelper.setSprite(
      "02-Avatar.png",
      0,
      0,
      scale,
      spritesheetContent
    );

    maskOverlapTextureSprite = pixiHelper.setSprite(
      "03-Front.png",
      -20,
      0,
      scale,
      spritesheetContent
    );

    backgroundTextureSprite = pixiHelper.setSprite(
      "08-Background.png",
      -displacementBackgroundOffset,
      0,
      scale,
      spritesheetContent
    );

    displacementSprite = pixiHelper.setDisplacementSprite(
      scale,
      "06-Back-depth.png",
      -20,
      0,
      spritesheetContent
    );

    overlayDisplacementSprite = pixiHelper.setDisplacementSprite(
      scale,
      "06-Back-depth.png",
      -20,
      0,
      spritesheetContent
    );

    backgroundDisplacementSprite = pixiHelper.setDisplacementSprite(
      scale,
      "08-Background-depth.png",
      0,
      0,
      spritesheetContent
    );

    // Set a mask that will be used to hide elements outside the card
    image.mask = maskSprite;
  }

  // Add the displacement filters to the textures
  function setDisplacement() {
    if (displacementSprite) {
      foreground.addChild(displacementSprite);

      displacementFilter = new PIXI.DisplacementFilter(displacementSprite, 0);
      foregroundTextureSprite.filters = [displacementFilter];
      displacementSprite.texture.updateUvs();

      backgroundDisplacementFilter = new PIXI.DisplacementFilter(
        backgroundDisplacementSprite,
        0
      );
      background.addChild(backgroundDisplacementSprite);
      backgroundTextureSprite.filters = [backgroundDisplacementFilter];
      foreground.x = foreground2.x = -15;

      foreground2.addChild(overlayDisplacementSprite);
      overlayDisplacementFilter = new PIXI.DisplacementFilter(
        overlayDisplacementSprite,
        0
      );
      if (maskOverlapTextureSprite)
        maskOverlapTextureSprite.filters = [overlayDisplacementFilter];
    }
  }

  interface Range {
    min: number;
    max: number;
  }

  function convertRange(value: number, oldRange: Range, newRange: Range) {
    return (
      ((value - oldRange.min) * (newRange.max - newRange.min)) /
        (oldRange.max - oldRange.min) +
      newRange.min
    );
  }

  function addChildren() {
    if (backgroundTextureSprite) background.addChild(backgroundTextureSprite);
    if (foregroundTextureSprite) foreground.addChild(foregroundTextureSprite);
    if (iconsSprite) uiElements.addChild(iconsSprite);
    if (frontTextureSprite) container.addChild(frontTextureSprite);
    if (cardSprite) container.addChild(cardSprite);
    if (shadowSprite) background.addChild(shadowSprite);
    if (maskSprite) container.addChild(maskSprite);
    if (foreground2) container.addChild(foreground2);
    if (maskOverlapTextureSprite)
      foreground2.addChild(maskOverlapTextureSprite);
    if (displacementSprite) foreground2.addChild(displacementSprite);
    if (backgroundDisplacementSprite)
      foreground2.addChild(backgroundDisplacementSprite);
    if (overlayDisplacementSprite)
      foreground2.addChild(overlayDisplacementSprite);
    if (avatarIconSprite) uiElements.addChild(avatarIconSprite);
  }

  function setRotation() {
    rotationValue.set(-animationRotationX, {
      duration: rotationDuration,
      easing: (t) => t,
    });
  }
</script>

<div
  class="wrapper"
  style="perspective: 1000px; transform-origin: 50% 50%; width: 100%; height: 100%;"
>
  <div
    bind:this={containerApp}
    style="width: 100%; height: 100%; position: absolute;"
  >
    <div
      bind:this={refApp}
      style="width: 110%; height: 100%; position: absolute; border-radius: 30px; overflow: hidden;"
    ></div>
  </div>
</div>
