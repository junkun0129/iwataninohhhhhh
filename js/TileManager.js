export class TileManager {
    constructor(gp) {
        this.minimapShrink = 12;
        this.minimapX = 50;
        this.minimapY = 450;
        this.gp = gp;
    }
    draw(c) {
        let mapX = 0 - this.gp.player.playerX + 750;
        let mapY = 0 - this.gp.player.playerY + 350;
        //map
        let image = new Image;
        image.src = "../img/MapShin.png";
        c.drawImage(image, mapX, mapY, this.gp.worldWidth, this.gp.worldHeight);
        //minimap
        let minimap = new Image;
        minimap.src = "../img/MapShin.png";
        c.drawImage(minimap, this.minimapX, this.minimapY, this.gp.worldWidth / this.minimapShrink, this.gp.worldHeight / this.minimapShrink);
        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 5;
        c.strokeRect(this.minimapX, this.minimapY, this.gp.worldWidth / this.minimapShrink, this.gp.worldHeight / this.minimapShrink);
        c.fillStyle = "red";
        //c.fillRect(this.minimapX,this.minimapY,20,20);
        c.beginPath();
        c.arc(this.minimapX + this.gp.tilesize / this.minimapShrink + this.gp.player.playerX / this.minimapShrink, this.minimapY + this.gp.tilesize / this.minimapShrink + this.gp.player.playerY / this.minimapShrink, 6, 0, 100);
        c.fill();
    }
}
