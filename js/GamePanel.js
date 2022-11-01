import { Player } from "./Player.js";
import { Keyhandler } from "./KeyHandler.js";
import { TileManager } from "./TileManager.js";
import { CollisionMap } from "./CollisionMap.js";
import { CollisionChecker } from "./CollisionChecker.js";
import { UI } from "./UI.js";
import { Asset } from "./Asset.js";
import { LSManager } from "./LSManager.js";
import { Entity } from "./npc/Entity.js";
export class GamePanel {
    constructor() {
        this.count = 0;
        this.fieldScene = true;
        this.menuScene = false;
        this.itemView = false;
        this.startOverMakeSure = false;
        this.talkingstate = false;
        this.gameStartOver = false;
        this.player = new Player(this);
        this.entity = new Entity(this);
        this.npc = [];
        this.tileM = new TileManager(this);
        this.keyH = new Keyhandler(this);
        this.collisionM = new CollisionMap(this);
        this.collisionC = new CollisionChecker(this);
        this.ui = new UI(this);
        //public obj:ObjectManeger[] = [];
        this.asset = new Asset(this);
        this.strageM = new LSManager();
        this.collision = false;
        this.collisionNPC = false;
        //public collisionArray:CollisionTile[] = this.collisionM.mapArrayCreate(); 
        this.screenWidth = 1500;
        this.screenHeight = 700;
        this.worldWidth = 3840;
        this.worldHeight = 2560;
        this.originalTilesize = 32;
        this.scale = 2;
        this.tilesize = this.originalTilesize * this.scale;
        this.canvas = document.querySelector("canvas");
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
        const c = this.canvas.getContext("2d");
        if (!c) {
            throw new Error("failed");
        }
        this.c = c;
    }
    setup() {
        this.asset.setObject();
        this.asset.setNpc();
        this.gameloop();
    }
    gameloop() {
        let time = Date.now();
        let delta = 0;
        let iwatani4 = 0;
        //draw on canvas 
        this.draw();
        if (this.fieldScene) {
            this.player.update();
            if (this.npc.length > 0) {
                for (let i = 0; this.npc.length > i; i++) {
                    this.npc[i].update();
                }
            }
        }
        //console.log("まえの"+time);
        //start over
        if (this.gameStartOver) {
            this.asset.setObject();
            localStorage.removeItem("itemInventory");
            this.player.itemInventory = [];
            this.player.playerX = this.player.playerXOriginal;
            this.player.playerY = this.player.playerYOriginal;
        }
        // delta = Date.now()-time;
        // if(delta+16<=17){
        //     iwatani4 = 16;
        // }else{
        //     iwatani4 = 16-((delta+16)-17);
        // }
        // setTimeout(() => {
        //     //reset canvas
        //     this.c.clearRect(0,0,1500,700);
        //     time = Date.now();
        //     //console.log("いまの"+time);
        //     //next draw
        //     requestAnimationFrame(this.gameloop.bind(this)); 
        // }, iwatani4);
        requestAnimationFrame(this.gameloop.bind(this));
    }
    draw() {
        this.c.fillStyle = "black";
        this.c.fillRect(0, 0, 1500, 700);
        this.count++;
        this.tileM.draw(this.c);
        this.player.draw(this.c);
        //collision tile
        this.collisionM.draw(this.c);
        //object
        // for(let i:number = 0; i<this.obj.length; i++){
        //     if(this.obj[i] !== undefined){
        //         this.obj[i].draw(this.c);
        //     }
        // }
        this.asset.draw(this.c);
        this.ui.draw(this.c);
    }
}
//start game
function start() {
    window.onload = () => {
        let iwatani = new GamePanel;
        iwatani.setup();
    };
}
start();
// console.log("iwataniiiiii");
// let iwatani = new GamePanel;
// iwatani.setup();
// window.onload = ()=>{
//     iwatani.gameloop();
// }
