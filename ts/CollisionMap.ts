import { GamePanel } from "./GamePanel.js";
import { data } from "./data.js";
import { CollisionTile } from "./CollisionTile.js";
import { Player } from "./Player.js";
export class CollisionMap{
    
    gp:GamePanel;
    public collisionArray:CollisionTile[] = this.mapArrayCreate();
    constructor(gp:GamePanel){
       this.gp = gp;

        
       
    }

    mapArrayCreate():CollisionTile[]{
        const collisionMap = [];

        for(let i = 0; i<data.length; i += 60){
            collisionMap.push(data.slice(i,60+i));
        }

        const collisionMapNext: CollisionTile[] = [];
        

        collisionMap.forEach((row, i)=>{
            row.forEach((num, j)=>{
                if(num === 594){

                    collisionMapNext.push(new CollisionTile(i, j, num));
                }
                
            })
        })

        

        return collisionMapNext;
        
    }

    draw(c:CanvasRenderingContext2D){
        this.collisionArray.forEach((tile)=>{
            let collisionTileX:number = tile.worldX-this.gp.player.playerX+750;
            let collisionTileY:number = tile.worldY-this.gp.player.playerY+350;
            c.fillStyle = "rgb(0,0,0,0)";
            c.fillRect(collisionTileX, collisionTileY, this.gp.tilesize, this.gp.tilesize);

            

           

            
            
            
            
            
        })


        

    }
}