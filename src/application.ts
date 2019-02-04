import { RattleSnakeBase } from "../core/rattlesnake.base";
import { BotSimple } from "./bot/simple/bot";
import { ConfigENV } from "../core/utils/configenv";

export class Application extends RattleSnakeBase{

    routes(){
        super.routes();
    }

    config(){

        // Is required/
        this.runAs = ConfigENV.get()['APPLICATION_CONTEXT'];
        this.loadBot = new BotSimple();
    }

}