export class Keyhandler {
    constructor(gp) {
        this.upPressed = false;
        this.downPressed = false;
        this.leftPressed = false;
        this.rightPressed = false;
        this.iwatani = 1;
        this.gp = gp;
        this.keyDown();
        this.keyUp();
    }
    keyDown() {
        window.addEventListener("keydown", (e) => {
            if (this.gp.fieldScene) {
                if (e.key === "w") {
                    this.upPressed = true;
                }
                if (e.key === "s") {
                    this.downPressed = true;
                }
                if (e.key === "a") {
                    this.leftPressed = true;
                }
                if (e.key === "d") {
                    this.rightPressed = true;
                }
                //menu open
                if (e.key === "q") {
                    this.gp.fieldScene = false;
                    this.gp.menuScene = true;
                    console.log("menu open");
                }
            }
            if (this.gp.menuScene) {
                //menu indicator
                if (e.key === "s") {
                    if (this.gp.ui.menuNumber < 5) {
                        this.gp.ui.menuNumber++;
                        console.log("menuNum" + this.gp.ui.menuNumber);
                    }
                }
                if (e.key === "w") {
                    if (this.gp.ui.menuNumber > 1) {
                        this.gp.ui.menuNumber--;
                        console.log("menuNum" + this.gp.ui.menuNumber);
                    }
                }
                //select item on menu
                if (this.gp.ui.menuNumber === 2) {
                    if (e.key === "e") {
                        this.gp.itemView = true;
                        this.gp.menuScene = false;
                        console.log("item open " + this.gp.itemView);
                    }
                }
                //select startover on menu
                if (this.gp.ui.menuNumber === 4) {
                    if (e.key === "e") {
                        this.gp.startOverMakeSure = true;
                        this.gp.menuScene = false;
                        console.log("start over");
                        console.log(this.gp.startOverMakeSure);
                    }
                }
                //select close on menu
                if (this.gp.ui.menuNumber === 5) {
                    if (e.key === "e") {
                        this.gp.fieldScene = true;
                        this.gp.menuScene = false;
                        console.log("menu close");
                    }
                }
            }
            //select items on itemView
            if (this.gp.itemView) {
                if (e.key === "w") {
                    if (0 < this.gp.ui.itemViewIndicateNum) {
                        this.gp.ui.itemViewIndicateNum--;
                        console.log(this.gp.ui.itemViewIndicateNum);
                    }
                }
                if (e.key === "s") {
                    if (this.gp.ui.itemViewNum > this.gp.ui.itemViewIndicateNum) {
                        this.gp.ui.itemViewIndicateNum++;
                        console.log(this.gp.ui.itemViewIndicateNum);
                    }
                }
                if (this.gp.ui.itemViewIndicateNum === 0) {
                    if (e.key === "e") {
                        console.log("ositayo");
                        if (this.gp.ui.makesureWaite > 0) {
                            this.gp.itemView = false;
                            this.gp.fieldScene = true;
                            this.gp.ui.itemViewNum = 1;
                            this.gp.ui.makesureWaite = 0;
                        }
                    }
                }
            }
            //on makesure screen
            if (this.gp.startOverMakeSure) {
                if (e.key === "a") {
                    this.gp.ui.makesureNum = 1;
                }
                if (e.key === "d") {
                    this.gp.ui.makesureNum = 2;
                }
                if (this.gp.ui.makesureNum === 1) {
                    if (e.key === "e") {
                        if (this.gp.ui.makesureWaite > 50) {
                            this.gp.fieldScene = true;
                            this.gp.startOverMakeSure = false;
                            this.gp.gameStartOver = true;
                            this.gp.ui.makesureWaite = 0;
                        }
                    }
                }
                if (this.gp.ui.makesureNum === 2) {
                    if (e.key === "e") {
                        if (this.gp.ui.makesureWaite > 50) {
                            this.gp.startOverMakeSure = false;
                            this.gp.ui.makesureWaite = 0;
                            this.gp.menuScene = true;
                        }
                    }
                }
            }
            if (this.gp.talkingstate) {
                if (e.key === "e") {
                    console.log("kim yunson");
                    this.gp.npc[0].dialogIndex++;
                    this.gp.npc[0].speak();
                }
            }
        });
    }
    keyUp() {
        if (this.gp.fieldScene) {
            window.addEventListener("keyup", (e) => {
                if (e.key === "w") {
                    this.upPressed = false;
                }
                if (e.key === "s") {
                    this.downPressed = false;
                }
                if (e.key === "a") {
                    this.leftPressed = false;
                }
                if (e.key === "d") {
                    this.rightPressed = false;
                }
            });
        }
    }
}
