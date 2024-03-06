import Phaser from "phaser";

interface SceneData {
    semester: number;
}

export default class Winter extends Phaser.Scene {
    constructor() {
        super({ key: "Winter" });
    }

    preload() {
        this.load.image("ud-winter", "assets/ud-winter.jpeg");
    }

    create(data: SceneData) {
        this.add.image(400, 300, "ud-winter");
        this.add.text(70, 100, "Winter Campus", {
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
            color: "#0099ff",
            strokeThickness: 15,
        });
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start("Spring", { semester: data.semester + 1 });
        });
    }

    update() {}
}
