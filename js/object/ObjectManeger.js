export class ObjectManeger {
    constructor(gp) {
        this.image = new Image;
        this.gp = gp;
    }
    draw(c) {
        let objectX = this.objectX - this.gp.player.playerX + 750;
        let objectY = this.objectY - this.gp.player.playerY + 350;
        c.drawImage(this.image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
    }
}
