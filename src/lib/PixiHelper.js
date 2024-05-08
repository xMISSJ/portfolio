import * as PIXI from "pixi.js";

export default class PixiHelper {
  constructor(app) {
    this.app = app;
  }

  /**
   * @param {string} spriteName the name of the frame we want to get
   * @param {number} xPos the x position of the placement
   * @param {number} yPos the y position of the placement
   * @param {number} scale the scale of the sprite
   * @param {PIXI.Spritesheet} spritesheet the spritesheet where the sprite is in
   * @returns {PIXI.Sprite} the sprite
   */
  setSprite(spriteName, xPos, yPos, scale, spritesheet) {
    if (!spritesheet) return null;

    let texture, sprite;

    try {
      texture = spritesheet.textures[spriteName];
      if (!spritesheet._frames[spriteName]) return null;
      if (texture.valid && !texture.destroyed) {
        sprite = new PIXI.Sprite(texture);
        sprite.width = spritesheet._frames[spriteName].frame.w;
        sprite.height = spritesheet._frames[spriteName].frame.h;
        sprite.x = xPos;
        sprite.y = yPos;
        sprite.scale.set(scale);
      }

      console.log("test", sprite);
    } catch (e) {
      console.log("error", e);
      if (texture) {
        console.log(`Texture ${spriteName} is destroyed`);
        texture.destroy(true);
      }
      return null;
    }
    return sprite;
  }

  /**
   * A method which makes a new texture from the basetexture and make it into a new sprite.
   * This way the basetexture has no influence on the sprite.
   * @param {number} scale the scale of the sprite
   * @param {string} spriteName the name of the frame we want to get
   * @param {number} xPos the x position of the placement
   * @param {number} yPos the y position of the placement
   * @param {PIXI.Spritesheet} spritesheet the spritesheet where the sprite is in
   * @returns {PIXI.Sprite} the displacement sprite
   */
  setDisplacementSprite(scale, spriteName, xPos, yPos, spritesheet) {
    if (!spritesheet) return null;

    let baseTex, renderSprite, renderTexture, sprite;

    try {
      baseTex = spritesheet.textures[spriteName];

      if (!baseTex) return null;
      if (baseTex.valid && !baseTex.destroyed) {
        renderSprite = new PIXI.Sprite(baseTex);
        renderSprite.position.x = 0;
        renderSprite.position.y = 0;
        renderSprite.anchor.x = 0;
        renderSprite.anchor.y = 0;

        renderTexture = PIXI.RenderTexture.create({
          width: baseTex.orig.width,
          height: baseTex.orig.height,
        });

        this.app.renderer.render(renderSprite, {
          renderTexture: renderTexture,
        });

        sprite = new PIXI.Sprite(renderTexture);
        sprite.x = xPos;
        sprite.y = yPos;
        sprite.width = baseTex.orig.width;
        sprite.height = baseTex.orig.height;
        sprite.scale.set(scale);
      }
    } catch (e) {
      console.log("error", e);
      if (baseTex) {
        console.log(`Base Texture ${spriteName} is destroyed`);
        baseTex.destroy(true);
      }
      if (renderTexture) {
        console.log(`RenderTexture ${spriteName} is destroyed`);
        renderTexture.destroy(true);
      }
      return null;
    }
    return sprite;
  }

  /**
   * Make a new pixi text with the following params:
   * @param {string} textContent the text we want to display
   * @param {string} family the font family
   * @param {number} fontSize the font size
   * @param {string} color the color of the text
   * @param {number} xPos the x position of the placement
   * @param {number} yPos the y position of the placement'
   * @returns {PIXI.Text} the text
   */
  setText(textContent, weight, fontSize, color, xPos, yPos) {
    let text = new PIXI.Text(textContent, {
      fontFamily: "proxima-nova, sans-serif",
      fontWeight: weight,
      fontSize: fontSize,
      fill: color,
      align: "center",
      lineHeight: 28,
    });
    text.x = xPos;
    text.y = yPos;

    return text;
  }

  setHexCodeColor(color) {
    let newColor = null;
    switch (color) {
      case "green":
        newColor = 0x72bf44;
        break;
      case "yellow":
        newColor = 0xfcaf18;
        break;
      case "red":
        newColor = 0xe3000b;
        break;
      case "blue":
        newColor = 0x0058a9;
        break;

      default:
        break;
    }
    return newColor;
  }
}
