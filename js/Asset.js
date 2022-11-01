import { Npc } from "./npc/Npc.js";
export class Asset {
    constructor(gp) {
        this.boolean = true;
        this.itemsOnMap = [];
        this.gp = gp;
    }
    setObject() {
        // this.gp.obj[0] = new ObjectManeger(this.gp, "yakusou", 2700, 2000, "../img/yakusou.png", false);
        // this.gp.obj[1] = new ObjectManeger(this.gp, "yakusou", 2900, 2000, "../img/yakusou.png", false);
        // this.gp.obj[2] = new ObjectManeger(this.gp, "yakusou", 2600, 1900, "../img/yakusou.png", false);
        // this.gp.obj[3] = new ObjectManeger(this.gp, "yakusou", 3100, 2100, "../img/yakusou.png", false);
        if (this.gp.gameStartOver) {
            this.itemsOnMap = [
                { name: "yakusou", x: 3000, y: 1900, picture: "../img/yakusou.png", collision: false, pickable: true },
                { name: "yakusou", x: 2900, y: 2000, picture: "../img/yakusou.png", collision: false, pickable: true },
                { name: "yakusou", x: 3100, y: 2000, picture: "../img/yakusou.png", collision: false, pickable: true },
                { name: "yakusou", x: 3100, y: 2100, picture: "../img/yakusou.png", collision: false, pickable: true },
                { name: "bomb", x: 2580, y: 1800, picture: "../img/bomb.png", collision: false, pickable: true },
                { name: "rock", x: 2880, y: 1350, picture: "../img/rock.png", collision: true, pickable: false }
            ];
            localStorage.setItem("itemOnMap", JSON.stringify(this.itemsOnMap));
            // pickItemStore=[
            //     {name:"rock", x:3000, y:1900, picture:"../img/rock.png", collision:true}          
            // ]
            this.gp.gameStartOver = false;
        }
        //this.itemsOnMap = JSON.parse(localStorage.getItem("pickItem")||"[]");
    }
    setNpc() {
        this.gp.npc[0] = new Npc(this.gp);
        this.gp.npc[0].npcX = 3000;
        this.gp.npc[0].npcY = 1800;
        this.gp.npc[0].picture = "../../img/npc.png";
    }
    draw(c) {
        this.itemsOnMap = JSON.parse(localStorage.getItem("itemOnMap") || "[]");
        if (this.itemsOnMap.length > 0) {
            for (let i = 0; this.itemsOnMap.length > i; i++) {
                if (this.itemsOnMap[i] !== undefined) {
                    let image = new Image;
                    image.src = this.itemsOnMap[i].picture;
                    let objectX = this.itemsOnMap[i].x - this.gp.player.playerX + 750;
                    let objectY = this.itemsOnMap[i].y - this.gp.player.playerY + 350;
                    c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
                }
            }
        }
        for (let i = 0; this.gp.npc.length > i; i++) {
            this.gp.npc[i].draw(c);
        }
    }
}
