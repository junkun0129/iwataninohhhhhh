import { Player } from "./Player.js";
import { Keyhandler } from "./KeyHandler.js";
import { TileManager } from "./TileManager.js";
import { CollisionMap } from "./CollisionMap.js";
import { CollisionTile } from "./CollisionTile.js";
import { CollisionChecker } from "./CollisionChecker.js";
import { UI } from "./UI.js";
import { ObjectManeger } from "./ObjectManeger.js";
import { Asset } from "./Asset.js";
import { LSManager } from "./LSManager.js";
import { Npc } from "./npc/Npc.js";
import { Entity } from "./npc/Entity.js";


export class GamePanel{


    // public oneC = new oneClass(this);
    canvas: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    count: number = 0;

    public fieldScene:boolean = true;
    public menuScene:boolean = false;
    public itemView:boolean = false;
    public startOverMakeSure:boolean = false;
    public talkingstate:boolean = false;
    
    public gameStartOver:boolean = false;
    
    public player:Player = new Player(this);
    public entity:Entity = new Entity(this);
    public npc:Npc[] = [];
    public tileM:TileManager = new TileManager(this);
    public keyH:Keyhandler = new Keyhandler(this);
    public collisionM:CollisionMap = new CollisionMap(this);
    public collisionC:CollisionChecker = new CollisionChecker(this);
    public ui:UI = new UI(this);
    //public obj:ObjectManeger[] = [];
    public asset:Asset = new Asset(this);
    public strageM:LSManager = new LSManager();



    

   

    public collision:boolean = false;
    public collisionNPC:boolean = false;
    //public collisionArray:CollisionTile[] = this.collisionM.mapArrayCreate(); 
    
    public screenWidth:number = 1500;
    public screenHeight:number = 700;

    public worldWidth:number = 3840;
    public worldHeight:number = 2560;

    public originalTilesize:number = 32;
    public scale:number = 2;
    public tilesize:number = this.originalTilesize*this.scale;


    constructor(){
        this.canvas = <HTMLCanvasElement>document.querySelector("canvas");
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
        const c = this.canvas.getContext("2d");
        
        if(!c){
            throw new Error("failed");
        }

        this.c = c;
    }



    public setup():void{
        
        
        this.asset.setObject();
        this.asset.setNpc();
       
        this.gameloop();
        
    }

   
    public gameloop():void{

        
        
        let time = Date.now();
        let delta:number = 0;
        let iwatani4:number = 0;
        
        
        
        //draw on canvas 
        this.draw();

        if(this.fieldScene){
            this.player.update();
            if(this.npc.length > 0){
                for(let i:number = 0; this.npc.length>i; i++){
                    this.npc[i].update();
                }
            }
        }
        
        
       
        
        //console.log("まえの"+time);
            
        //start over
        if(this.gameStartOver){
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

    public draw():void{
        this.c.fillStyle = "black";
        this.c.fillRect(0,0,1500,700);
        
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
function start():void{

    window.onload = ()=>{
        let iwatani = new GamePanel;
        
        iwatani.setup();
    }
}

start();

// console.log("iwataniiiiii");

// let iwatani = new GamePanel;
// iwatani.setup();
// window.onload = ()=>{
//     iwatani.gameloop();
// }




