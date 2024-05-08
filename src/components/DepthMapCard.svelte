<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import PixiHelper from "$lib/PixiHelper";
  import * as PIXI from "pixi.js";
  import Image from "./Image.svelte";
  import { tweened } from "svelte/motion";

  export let id: string; // Should be card number with appendix
  export let data: any;
  export let jsonName: string;
  export let spritePath: string;
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

  // Tweakables
  const width = 512;
  const height = 786;
  const scale: number = 0.65;
  const displacementBackgroundOffset: number = 30;
  const maxRot: number = 20;
  const maxRotationX: number = 5;
  const defaultRotationalDisplacement: number = 3;

  let displacementCard: number = 3;
  let rotationDisplacement: number = 2;
  let rotationAmountCard: number = 1;
  let rotationDuration: number = 2000;

  // Data
  let cardCharacter: string;
  let cardNumber: number;
  let dataCard: any;
  let init: boolean = false;
  let pLoaderInitted: boolean = false;
  let isFading: boolean = false;
  let themeColor: number;
  let playAnimation: boolean = false;

  // PIXI miscellaneous
  let app: PIXI.Application;
  let pixiHelper: PixiHelper;
  let animationTicker: PIXI.Ticker;
  let spritesheetContent: PIXI.Spritesheet;
  let spritesheetGeneric: PIXI.Spritesheet;
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
  let subtitleText: PIXI.Text;
  let healthText: PIXI.Text;
  let socialText: PIXI.Text;
  let energyText: PIXI.Text;

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
  let displacementFilter: PIXI.filters.DisplacementFilter;
  let backgroundDisplacementFilter: PIXI.filters.DisplacementFilter;
  let overlayDisplacementFilter: PIXI.filters.DisplacementFilter;

  let containerApp: HTMLElement;
  let refApp: HTMLElement;

  let rotationValue = tweened(0, {
    duration: rotationDuration,
    easing: (t) => t,
  });

  $: if ($rotationValue === -maxRot || $rotationValue === maxRot) {
    rotationValue.set($rotationValue === maxRot ? -maxRot : maxRot);
  }

  $: if (rotationValue) {
    rotationValue.subscribe((value) => {
      rotationAmountCard = value;
    });
  }

  $: if (id) {
    destroyElements();
  }

  $: setRotation();

  $: if (rotationAmountCard) {
    let displacement = convertRange(
      rotationAmountCard,
      { min: -maxRotationX, max: maxRotationX },
      { min: -displacementCard, max: displacementCard }
    );

    let rotationX = displacementCard; // or rotationAmountCard if that was intended
    let movementX = rotationX * displacement;

    if (displacementFilter != null) {
      console.log("oi");
      displacementFilter.scale.x = -movementX;
      overlayDisplacementFilter.scale.x = -movementX;
      backgroundDisplacementFilter.scale.x = -movementX;
    }

    background.x = -movementX / 2;
    foreground.x = -movementX / 2;
    foreground2.x = -movementX / 2;
  }

  $: if (refApp != null && app != null && init) {
    app.renderer.view.style.width = "100%";
    app.renderer.view.style.height = "100%";
    refApp.appendChild(app.renderer.view);
  }

  $: if (refApp != null && playAnimation) {
    let rotationAmount = convertRange(
      rotationAmountCard,
      { min: -maxRotationX, max: maxRotationX },
      { min: -maxRotationX, max: maxRotationX }
    );

    containerApp.style.transform = `rotateY(${rotationAmount}deg)`;
  }

  onMount(() => {
    initializePixiApp();
  });

  onDestroy(() => {
    destroyElements();
  });

  function initializePixiApp() {
    if (!app) {
      console.log("app is null");
      app = new PIXI.Application({
        width: width,
        height: height,
        antialias: false,
        resolution: 1,
        autoStart: false,
      });
      app.renderer.resize(width / 0.9, height);
      app.renderer.view.style.position = "relative";
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
    createContainers();
    loadTextures();
    setRotationDisplacement();

    animationTicker = PIXI.Ticker.shared.add(animateApp);
  }

  function getData() {
    if (data.id == id) {
      dataCard = data;
      return;
    }

    console.log("get data");

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

  function createContainers() {
    stage.addChild(container);
    container.addChild(image);
    image.addChild(background);
    image.addChild(foreground);
    container.addChild(foreground2);
    container.addChild(displacementContainer);
    stage.addChild(uiElements);
  }

  function destroyElements() {
    console.log("Destroy elements");
    if (container && container.parent) {
      stage.removeChild(container);
      animateApp();
    }

    init = false;
    isFading = false;
    destroyTicker();

    if (uiElements) uiElements.removeChildren();
    if (stage) stage.removeChildren();

    // Destroy PIXI texts
    destroyObject(titleText);
    destroyObject(subtitleText);
    destroyObject(cardNumberText);
    destroyObject(cardCharacterText);
    destroyObject(healthText);
    destroyObject(socialText);
    destroyObject(energyText);

    // Destroy PIXI sprites
    destroyObject(cardSprite);
    destroyObject(iconsSprite);
    destroyObject(avatarIconSprite);
    destroyObject(frontTextureSprite);
    destroyObject(maskSprite);
    destroyObject(shadowSprite);
    destroyObject(maskOverlapTextureSprite);
    destroyObject(backgroundTextureSprite);
    destroyObject(displacementSprite);
    destroyObject(backgroundDisplacementSprite);
    destroyObject(overlayDisplacementSprite);

    // Destroy PIXI filters
    destroyObject(displacementFilter);
    destroyObject(backgroundDisplacementFilter);
    destroyObject(overlayDisplacementFilter);

    if (image) image.mask = null;
    if (displacementSprite) displacementSprite.texture.destroy();
    if (foregroundTextureSprite) foregroundTextureSprite.filters = [];
    if (backgroundTextureSprite) backgroundTextureSprite.filters = [];
    if (maskOverlapTextureSprite) maskOverlapTextureSprite.filters = [];

    PIXI.utils.clearTextureCache();
    PIXI.utils.destroyTextureCache();

    if (
      ploader &&
      ploader.resources.genericSheet &&
      ploader.resources.genericSheet.spritesheet &&
      ploader.resources.genericSheet.spritesheet.baseTexture
    ) {
      ploader.resources.genericSheet.spritesheet.baseTexture.destroy();
    }

    if (
      ploader &&
      ploader.resources.contentsCard &&
      ploader.resources.contentsCard.spritesheet &&
      ploader.resources.contentsCard.spritesheet.baseTexture
    ) {
      ploader.resources.contentsCard.spritesheet.baseTexture.destroy();
    }

    if (
      ploader &&
      ploader.resources.genericSheet &&
      ploader.resources.genericSheet.spritesheet
    ) {
      ploader.resources.genericSheet.spritesheet.destroy();
    }

    if (
      ploader &&
      ploader.resources.contentsCard &&
      ploader.resources.contentsCard.spritesheet &&
      ploader.resources.contentsCard.spritesheet.textures &&
      ploader.resources.contentsCard.spritesheet.baseTexture
    ) {
      ploader.resources.contentsCard.spritesheet.textures = null;
      ploader.resources.contentsCard.spritesheet.baseTexture.destroy();
    }

    if (
      ploader &&
      ploader.resources.genericSheet &&
      ploader.resources.genericSheet.spritesheet &&
      ploader.resources.genericSheet.spritesheet.textures &&
      ploader.resources.genericSheet.spritesheet.baseTexture
    ) {
      ploader.resources.genericSheet.spritesheet.textures = null;
      ploader.resources.genericSheet.spritesheet.baseTexture.destroy();
    }

    Object.keys(PIXI.utils.TextureCache).forEach(function (texture) {
      PIXI.utils.TextureCache[texture].destroy(true);
    });

    pLoaderInitted = false;

    // Reset and destroy PIXI loader and renderer
    if (ploader) {
      ploader.reset();
    }

    if (app) {
      if (app.renderer) {
        app.renderer.clear();
      }
    }
  }

  function destroyObject(obj: any) {
    if (obj) {
      obj.destroy();
    }
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

    // if (anim) {
    //   anim.stop();
    //   anim = null;
    // }
  }

  function loadTextures() {
    console.log("Load textures");
    playAnimation = true;

    ploader.add("contentsCard", spriteSheetPath + jsonName + ".json");
    ploader.add("genericSheet", spriteSheetPath + "genericCardAssets.json");

    console.log("ploader", ploader);
    ploader.onError.add((error) => {
      console.error("Error loading assets:", error);
    });

    ploader.onProgress.add((loader, resource) => {
      console.log("Loading progress:", loader.progress + "%");
    });

    ploader.onComplete.add(() => {
      console.log("Complete");
      isFading = true;
      setTextures();
      addChildren();
      setDisplacement();
      setAllTexts();
      pLoaderInitted = true;
    });
    ploader.load();
  }

  function setTextures() {
    console.log("set textures");
    themeColor = pixiHelper.setHexCodeColor(dataCard.color) ?? 0x72bf44;

    if (!ploader.resources.contentsCard) {
      console.log("wat");
      return;
    }

    console.log("cool");

    spritesheetContent = ploader.resources.contentsCard
      .spritesheet as PIXI.Spritesheet;
    spritesheetGeneric = ploader.resources.genericSheet
      .spritesheet as PIXI.Spritesheet;

    console.log("Spritesheet content", spritesheetContent);

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
      frontTextureSprite.tint = themeColor; // has to be a hex value
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

    console.log("displacement sprite set", displacementSprite);

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

  //Add the displacement filters to the textures
  function setDisplacement() {
    console.log("whack", displacementSprite);
    if (displacementSprite) {
      console.log("Set displacement");
      foreground.addChild(displacementSprite);

      console.log("wates");
      displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementSprite,
        0
      );

      console.log("diplacement filter", displacementFilter);
      foregroundTextureSprite.filters = [displacementFilter];
      displacementSprite.texture.updateUvs();

      backgroundDisplacementFilter = new PIXI.filters.DisplacementFilter(
        backgroundDisplacementSprite,
        0
      );
      background.addChild(backgroundDisplacementSprite);
      backgroundTextureSprite.filters = [backgroundDisplacementFilter];
      foreground.x = foreground2.x = -15;

      foreground2.addChild(overlayDisplacementSprite);
      overlayDisplacementFilter = new PIXI.filters.DisplacementFilter(
        overlayDisplacementSprite,
        0
      );
      if (maskOverlapTextureSprite)
        maskOverlapTextureSprite.filters = [overlayDisplacementFilter];
    }
  }

  function setAllTexts() {
    themeColor = pixiHelper.setHexCodeColor(dataCard.color) ?? 0x72bf44;

    // SEMIBOLD
    // Only set the text when the font is loaded
    // Add a special case for the card 24A, because it has 2 lines
    if (id == "24A") {
      titleText = pixiHelper.setText(
        dataCard.cardTitle,
        "600",
        32,
        "white",
        181,
        663
      );
    } else {
      titleText = pixiHelper.setText(
        dataCard.cardTitle,
        "600",
        32,
        "white",
        184,
        670
      );
    }
    healthText = pixiHelper.setText(
      dataCard.health,
      "600",
      26,
      "white",
      425,
      300
    );
    socialText = pixiHelper.setText(
      dataCard.social,
      "600",
      26,
      "white",
      425,
      412
    );
    energyText = pixiHelper.setText(
      dataCard.energy,
      "600",
      26,
      "white",
      425,
      508
    );

    uiElements.addChild(titleText);
    uiElements.addChild(healthText);
    uiElements.addChild(socialText);
    uiElements.addChild(energyText);

    // BOLD
    cardNumberText = pixiHelper.setText(
      cardNumber.toString(),
      "700",
      26,
      themeColor.toString(),
      420,
      55
    );

    cardCharacterText = pixiHelper.setText(
      cardCharacter,
      "700",
      18,
      themeColor.toString(),
      448,
      63
    );

    uiElements.addChild(cardNumberText);
    uiElements.addChild(cardCharacterText);

    //REGULAR
    if (id == "24A") {
      //Add a special case for the card 24A, because it has 2 lines
      subtitleText = pixiHelper.setText(
        dataCard.hashTag,
        "400",
        22.5,
        "white",
        184,
        730
      );
    } else {
      subtitleText = pixiHelper.setText(
        dataCard.hashTag,
        "400",
        22.5,
        "white",
        184,
        707
      );
    }
    uiElements.addChild(subtitleText);
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
    rotationValue.set(-maxRot, {
      duration: rotationDuration,
      easing: (t) => t,
    });
  }
</script>

<div
  bind:this={containerApp}
  style="perspective: 1000px; transform-origin: 50% 50%; width: 100%; height: 100%; position: absolute;"
>
  <div
    bind:this={refApp}
    style="position: absolute; width: 100%; height: 100%;"
  >
    <div style="position: absolute; width: 110%; height: 100%;"></div>
    <div style="position: absolute; width: 100%; height: 100%;">
      <div
        class="depth-card-container"
        style="position: absolute; width: 100%; height: 100%;"
      >
        <Image src={spritePath} alt="Depth Map Card" objectFit="contain" />
      </div>
    </div>
  </div>
</div>
