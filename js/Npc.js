export class Npc {
    constructor(gp, npcX, npcY, speed) {
        this.gp = gp;
        this.npcX = npcX;
        this.npcY = npcY;
        this.speed = speed;
        this.direction = "down";
    }
    update() {
        Math.floor(Math.random() * 5);
    }
}
