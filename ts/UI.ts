import { GamePanel } from "./GamePanel.js";

export class UI{
    gp:GamePanel;
    menuNumber:number = 1;
    itemViewNum:number = 1;
    itemViewIndicateNum:number = 0;
    makesureNum:number = 1;
    makesureWaite:number = 0;

    numberOfItem:number = 1;
    currentDialog:string = "";


    

    constructor(gp:GamePanel){
        this.gp = gp;
    }


    draw(c:CanvasRenderingContext2D){

        //menu draw
        if(this.gp.menuScene){
            this.drawMenu(c);
        }

        //select item
        if(this.gp.itemView){
            this.makesureWaite++;
            console.log(this.makesureWaite)
            this.drawItemView(c);
        }

        //makesure draw
        if(this.gp.startOverMakeSure){
            this.makesureWaite++;
            this.drawMakeSure(c);
        }

        //dialog
        if(this.gp.talkingstate){
            this.drawDialog(c);
        }

        
    }

    drawMenu(c:CanvasRenderingContext2D){

        const menuX:number = 1150;
        const menuY:number = 50;
        
        
        if(!this.gp.itemView){

            c.fillStyle = "black";
            c.fillRect(menuX,menuY,300,500);
    
            c.strokeStyle = "white";
            c.lineJoin = "bevel";
            c.lineWidth = 15;
            c.strokeRect(menuX, menuY, 300,500)
    
            c.fillStyle = "white";
            c.font = "40px monospace";
            c.fillText("Status", menuX+80, menuY+80)
            c.fillText("Item", menuX+80, menuY+170)
            c.fillText("Equipments", menuX+80, menuY+260)
            c.fillText("StartOver", menuX+80, menuY+350)
            c.fillText("Close", menuX+80, menuY+440)
        }


        
        
        //menu select
        switch(this.menuNumber){
            case 1: c.fillText("▶", menuX+30, menuY+80); break;
            case 2: c.fillText("▶", menuX+30, menuY+170); break;
            case 3: c.fillText("▶", menuX+30, menuY+260); break;
            case 4: c.fillText("▶", menuX+30, menuY+350); break;
            case 5: c.fillText("▶", menuX+30, menuY+440); break;
        }

        
    }

    drawItemView(c:CanvasRenderingContext2D){

        //item
        const itemMenuX = 150;
        const itemMenuY = 40;
        const itemMenuWidth = 1200;
        const itemMenuHeight = 600;

        c.fillStyle = "black";
        c.fillRect(itemMenuX,itemMenuY,itemMenuWidth,itemMenuHeight);

        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 15;
        c.strokeRect(itemMenuX,itemMenuY,itemMenuWidth,itemMenuHeight)

        c.fillStyle = "white";
        c.font = "40px monospace";
        c.fillText("Items", itemMenuX+70, itemMenuY+80)

        c.beginPath () ;
        c.moveTo( itemMenuX+70, itemMenuY+100);
        c.lineTo( itemMenuX+1100, itemMenuY+100 );
        c.strokeStyle = "white";
        c.lineWidth = 5;
        c.stroke();

        //one item
        let itemX = 0;
        let itemY = 0;
        this.gp.player.itemInventory = JSON.parse(localStorage.getItem("itemInventory")||"[]");
        this.itemViewNum = this.gp.player.itemInventory.length;
        this.gp.player.itemInventory.forEach((item, currentIndex)=>{
            let image = new Image;
            image.src = item.picture;
            c.drawImage(image, itemX+220, itemY+190, this.gp.tilesize*1.5,this.gp.tilesize*1.5);

            c.fillStyle = "white";
            c.font = "30px monospace";
            c.fillText(item.name, itemX+320, itemY+250)

            if(currentIndex === this.itemViewIndicateNum-1){

                c.strokeStyle = "white";
                c.lineJoin = "bevel";
                c.lineWidth = 4;
                c.strokeRect(itemX+220,itemY+200,300,80);
            }

            itemY += 80;
            
    
        })
       

        //close
        c.font = "30px monospace";
        c.fillText("close", 1100,115)


        if(this.itemViewIndicateNum === 0){

            c.lineWidth = 3;
            c.strokeRect(1090,85,100,40)
        }

        
    }

    drawMakeSure(c:CanvasRenderingContext2D){
        let x = 500;
        let y = 300;

        c.fillStyle = "black";
        c.fillRect(this.gp.screenWidth/2-x/2,this.gp.screenHeight/2-y/2,x,y)

        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 6;
        c.strokeRect(this.gp.screenWidth/2-x/2,this.gp.screenHeight/2-y/2,x,y);

        c.fillStyle = "white"
        c.font = "30px monospace";
        c.fillText("You want to start over?", x+70, y-10);

        c.font = "40px monospace";
        c.fillText("YES", x+110, y+110);
        c.fillText("NO", x+330, y+110);

        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 4;

        if(this.makesureNum === 1){

            c.strokeRect(570,360,140,70);
            this.makesureWaite
        }
        if(this.makesureNum === 2){

            c.strokeRect(780,360,140,70)
        }

    }

    drawDialog(c:CanvasRenderingContext2D){
        let dialogX = 240;
        let dialogY = 20;
        let dialogWidth = 1000;
        let dialogHeight = 250;

    
        c.fillStyle = "rgba(0,0,0,0.8)";
        c.fillRect(dialogX,dialogY,dialogWidth,dialogHeight);

        c.strokeStyle = "white";
        c.lineJoin = "bevel";
        c.lineWidth = 6;
        c.strokeRect(dialogX,dialogY,dialogWidth,dialogHeight);

        c.fillStyle = "white"
        c.font = "30px monospace";
        c.fillText(this.currentDialog, dialogX+50, dialogY+50);
    }

}