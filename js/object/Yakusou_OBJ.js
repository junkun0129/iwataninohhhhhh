import { ObjectManeger } from "./ObjectManeger";
export class Objects extends ObjectManeger {
    constructor(gp) {
        super(gp);
        this.gp = gp;
        this.image.src = "../../img/yakusou.png";
    }
}
