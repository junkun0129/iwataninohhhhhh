export class Player {
    constructor(gp) {
        this.spriteCounter = 0;
        this.spriteNum = 1;
        this.itemInventory = [];
        this.gp = gp;
        this.direction = "down";
        this.playerXOriginal = 3000;
        this.playerYOriginal = 2000;
        this.playerX = this.playerXOriginal;
        this.playerY = this.playerYOriginal;
        this.speed = 7;
        this.screenX = 750;
        this.screenY = 350;
    }
    update() {
        if (this.gp.keyH.downPressed === true || this.gp.keyH.upPressed === true || this.gp.keyH.leftPressed === true || this.gp.keyH.rightPressed === true) {
            if (this.gp.keyH.downPressed === true) {
                this.direction = "down";
                console.log("down");
            }
            ;
            if (this.gp.keyH.upPressed === true) {
                this.direction = "up";
                console.log("up");
            }
            ;
            if (this.gp.keyH.leftPressed === true) {
                this.direction = "left";
                console.log("left");
            }
            ;
            if (this.gp.keyH.rightPressed === true) {
                this.direction = "right";
                console.log("right");
            }
            ;
            this.gp.collision = false;
            this.gp.collisionC.checkCollisionEntity(this.direction);
            let deleteIndex = this.gp.collisionC.CheckCollisionObject(this.direction);
            let NPCbumped = this.gp.collisionC.CheckCollisionPlayerToEntity(this.direction);
            this.intaractNPC(NPCbumped);
            if (deleteIndex !== 999) {
                //if item pickable
                if (this.gp.asset.itemsOnMap[deleteIndex].pickable) {
                    this.itemInventory.push(this.gp.asset.itemsOnMap[deleteIndex]);
                    this.gp.strageM.setToStrage("itemInventory", this.itemInventory);
                    this.gp.asset.itemsOnMap.splice(deleteIndex, 1);
                    this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);
                }
                else if (this.gp.asset.itemsOnMap.length > 0) {
                    if (this.gp.asset.itemsOnMap[deleteIndex].name === "rock") {
                        for (let i = 0; this.itemInventory.length > i; i++) {
                            if (this.itemInventory[i].name === "bomb") {
                                let rock = this.gp.asset.itemsOnMap.findIndex(array => array.name === "rock");
                                this.gp.asset.itemsOnMap.splice(rock, 1);
                                this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);
                                this.itemInventory.splice(i, 1);
                                this.gp.strageM.setToStrage("itemInventory", this.itemInventory);
                            }
                        }
                    }
                }
                //if item have collision
                // if(this.gp.asset.itemsOnMap[deleteIndex].collision){
                //     this.gp.collision = true;
                // }
            }
            console.log(this.gp.asset.itemsOnMap);
            //localStorage.setItem("pickItem", JSON.stringify(this.gp.asset.itemsOnMap));
            console.log(localStorage);
            console.log(this.gp.collision);
            if (!this.gp.collision) {
                switch (this.direction) {
                    case "down": {
                        this.playerY += this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "up": {
                        this.playerY -= this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "left": {
                        this.playerX -= this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "right": {
                        this.playerX += this.speed;
                        console.log(this.direction);
                        break;
                    }
                }
            }
            this.spriteCounter++;
            if (this.spriteCounter > 10) {
                if (this.spriteNum === 1) {
                    this.spriteNum = 2;
                }
                else if (this.spriteNum === 2) {
                    this.spriteNum = 1;
                }
                this.spriteCounter = 0;
            }
        }
    }
    intaractNPC(i) {
        if (i !== 999) {
            console.log(this.gp.npc[i]);
            this.gp.fieldScene = false;
            this.gp.talkingstate = true;
            this.gp.npc[i].speak();
        }
    }
    draw(c) {
        //c.fillStyle = "red";
        //c.fillRect(200, 200, 200, 200);
        let image = new Image;
        switch (this.direction) {
            case "down":
                if (this.spriteNum === 1) {
                    image.src = "../img/yuusya-down1.png";
                }
                else if (this.spriteNum === 2) {
                    image.src = "../img/yuusya-down2.png";
                }
                break;
            case "up":
                if (this.spriteNum === 1) {
                    image.src = "../img/yuusya-up1.png";
                }
                else if (this.spriteNum === 2) {
                    image.src = "../img/yuusya-up2.png";
                }
                break;
            case "left":
                if (this.spriteNum === 1) {
                    image.src = "../img/yuusya-left1.png";
                }
                else if (this.spriteNum === 2) {
                    image.src = "../img/yuusya-left2.png";
                }
                break;
            case "right":
                if (this.spriteNum === 1) {
                    image.src = "../img/yuusya-right1.png";
                }
                else if (this.spriteNum === 2) {
                    image.src = "../img/yuusya-right2.png";
                }
                break;
        }
        if (this.spriteCounter <= 100)
            c.drawImage(image, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
    }
}
