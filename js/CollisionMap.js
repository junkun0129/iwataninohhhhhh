import { data } from "./data.js";
import { CollisionTile } from "./CollisionTile.js";
export class CollisionMap {
    constructor(gp) {
        this.collisionArray = this.mapArrayCreate();
        this.gp = gp;
    }
    mapArrayCreate() {
        const collisionMap = [];
        for (let i = 0; i < data.length; i += 60) {
            collisionMap.push(data.slice(i, 60 + i));
        }
        const collisionMapNext = [];
        collisionMap.forEach((row, i) => {
            row.forEach((num, j) => {
                if (num === 594) {
                    collisionMapNext.push(new CollisionTile(i, j, num));
                }
            });
        });
        return collisionMapNext;
    }
    draw(c) {
        this.collisionArray.forEach((tile) => {
            let collisionTileX = tile.worldX - this.gp.player.playerX + 750;
            let collisionTileY = tile.worldY - this.gp.player.playerY + 350;
            c.fillStyle = "rgb(0,0,0,0)";
            c.fillRect(collisionTileX, collisionTileY, this.gp.tilesize, this.gp.tilesize);
        });
    }
}
