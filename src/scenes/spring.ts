import Phaser from "phaser";

interface SceneData {
    semester: number;
}

export default class Spring extends Phaser.Scene {
    constructor() {
        super({ key: "Spring" });
    }

    preload() {
        this.load.image("ud-spring", "assets/ud-spring.jpeg");
    }

    create(data: SceneData) {
        const backgroundImage = this.add
            .image(0, 0, "ud-spring")
            .setOrigin(0, 0);
        backgroundImage.setScale(
            this.cameras.main.width / backgroundImage.width,
            this.cameras.main.height / backgroundImage.height
        );
        this.add.text(70, 100, "Spring Campus", {
            fontSize: "52px",
            color: "#000000",
            strokeThickness: 10,
        });
        this.add.text(840, 100, "Semester: " + data.semester, {
            fontSize: "52px",
            color: "#000000",
            strokeThickness: 10,
        });

        // Go to next scene on arrow click
        const nextButton = this.add.text(1180, 330, "►", {
            fontSize: "90px",
            color: "#FA7DC0",
            strokeThickness: 15,
        });
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start("Summer", { semester: data.semester + 1 });
        });
    }

    update() {}
}
