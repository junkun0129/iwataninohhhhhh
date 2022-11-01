import { Entity } from "./Entity.js";
export class Npc extends Entity {
    constructor(gp) {
        super(gp);
        this.gp = gp;
        this.setdialog();
    }
    setdialog() {
        //before getting rock
        this.dialogs[0] = "Hi, ";
        this.dialogs[1] = "My name is Toto.";
        this.dialogs[2] = "I'm trying to reach the other side across the river.";
        this.dialogs[3] = "Is there any way you can help me?";
        this.dialogs[4] = "Of course I'll pay for it.";
        //after getting rock
        this.dialogs[5] = "Thank you so much";
        this.dialogs[6] = "I could go see my daugther living over the river!";
        this.dialogs[7] = "I'm not sure this will pay back for you.";
        this.dialogs[8] = "I found this near by my house.";
        this.dialogs[9] = "See you then.";
    }
    speak() {
        let rock = this.gp.asset.itemsOnMap.findIndex(array => array.name === "rock");
        if (rock !== -1) {
            if (this.dialogIndex === 4) {
                this.gp.fieldScene = true;
                this.gp.talkingstate = false;
                this.dialogIndex = 0;
            }
            this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
        }
        if (rock === -1) {
            if (this.dialogIndex === 0) {
                this.dialogIndex = 5;
            }
            if (this.dialogIndex === 10) {
                this.gp.fieldScene = true;
                this.gp.talkingstate = false;
                this.dialogIndex = 0;
            }
            this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
        }
    }
}
