import Phaser from "phaser";

interface SceneData {
    semester: number;
}

export default class Summer extends Phaser.Scene {
    constructor() {
        super({ key: "Summer" });
    }

    preload() {}

    create(data: SceneData) {
        const backgroundImage = this.add
            .image(0, 0, "ud-summer")
            .setOrigin(0, 0);
        backgroundImage.setScale(
            this.cameras.main.width / backgroundImage.width,
            this.cameras.main.height / backgroundImage.height
        );
        this.add.text(70, 100, "Summer Campus", {
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
            color: "#11B813",
            strokeThickness: 15,
        });
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start("Fall", { semester: data.semester + 1 });
        });
    }

    update() {}
}
