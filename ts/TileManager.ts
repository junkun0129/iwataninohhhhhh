import { GamePanel } from "./GamePanel.js";
import { data } from "./data.js";
import { CollisionTile } from "./CollisionTile.js";
export class TileManager{
    gp: GamePanel;

    public minimapShrink = 12;
    public minimapX = 50;
    public minimapY = 450;

    
    

    constructor(gp: GamePanel){
        this.gp = gp;
        
    }

    public draw(c:CanvasRenderingContext2D):void{
        let mapX = 0 - this.gp.player.playerX + 750;
        let mapY = 0 - this.gp.player.playerY + 350;
        
        

        //map
        let image = new Image;
        image.src = "../img/MapShin.png";
        c.drawImage(image, mapX, mapY, this.gp.worldWidth, this.gp.worldHeight);

        
        //minimap
        let minimap = new Image;
        minimap.src = "../img/MapShin.png";
        c.drawImage(minimap, this.minimapX,this.minimapY,this.gp.worldWidth/this.minimapShrink,this.gp.worldHeight/this.minimapShrink);

        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 5;
        c.strokeRect(this.minimapX, this.minimapY, this.gp.worldWidth/this.minimapShrink,this.gp.worldHeight/this.minimapShrink);


        c.fillStyle = "red";
        //c.fillRect(this.minimapX,this.minimapY,20,20);

        c.beginPath();
        c.arc(this.minimapX+this.gp.tilesize/this.minimapShrink+this.gp.player.playerX/this.minimapShrink,
              this.minimapY+this.gp.tilesize/this.minimapShrink+this.gp.player.playerY/this.minimapShrink,
              6,0,100)
        c.fill();

        

    }

    
}