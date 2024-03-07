import Phaser from "phaser";

interface SceneData {
    semester: number;
}

export default class Fall extends Phaser.Scene {
    private semesterText!: Phaser.GameObjects.Text;
    private semester: number;

    constructor() {
        super({ key: "Fall" });
    }

    init(data: SceneData) {
        this.semester = 1 | data.semester;
    }

    preload() {}

    create() {
        const backgroundImage = this.add.image(0, 0, "ud-fall").setOrigin(0, 0);
        backgroundImage.setScale(
            this.cameras.main.width / backgroundImage.width,
            this.cameras.main.height / backgroundImage.height
        );
        //this.add.image(400, 300, "ud-fall");
        this.add.text(70, 100, "Fall Campus", {
            fontSize: "52px",
            color: "#000000",
            strokeThickness: 10,
        });
        this.add.text(840, 100, "Semester: " + this.semester, {
            fontSize: "52px",
            color: "#000000",
            strokeThickness: 10,
        });

        // Go to next scene on arrow click
        const nextButton = this.add.text(1180, 330, "►", {
            fontSize: "90px",
            color: "#CC0505",
            strokeThickness: 15,
        });
        nextButton.setInteractive();

        nextButton.on("pointerup", () => {
            this.scene.start("Winter", { semester: this.semester + 1 });
        });
    }

    update() {}
}
