import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        // load all images here to have them ready for the game
        this.load.image("ud-fall", "assets/ud-fall.jpeg");
        this.load.image("ud-winter", "assets/ud-winter.jpeg");
        this.load.image("ud-spring", "assets/ud-spring.jpeg");
        this.load.image("ud-summer", "assets/ud-summer.png");
    }

    create() {
        this.scene.start("Fall");
    }
}
