import { RattleSnakeBase } from "../core/rattlesnake.base";
import { BotSimple } from "./bot/simple/bot.simple";
import { ConfigENV } from "../core/utils/configenv";
import { BotInteractiveEvents } from "./bot/interactive/bot.interactive.events";
import { BotInteractiveActions } from "./bot/interactive/bot.interactive.actions";
import { BotServer } from "../core/bot/asserver/bot.server";

export class Application extends RattleSnakeBase {

    config() {

        // required
        this.runAs = ConfigENV.get()['APPLICATION_CONTEXT'];

        //the below configurations is Optional, but one that is set
        if (this.runAs === 'BOT') {
            // load your bot class by default is loaded BotSimple
            this.loadBot = new BotSimple();
        }
        if(this.runAs === 'SERVER'){
            // Set your Event e Action from slack bot as Server running
            const Bot = new BotServer();
            this.loadEvents = new BotInteractiveEvents(Bot);
            this.loadActions = new BotInteractiveActions();
        }
    }

}