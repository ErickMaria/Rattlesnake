import { Server } from "./server";
import { Bot } from "../bot/bot";

export class ServerAsBot implements Server{
    
    private bot: Bot;

    constructor(bot: Bot){
        this.bot = bot;
    }

    load(): void {
        this.bot.run();
        console.log("Bot's running");
    }

}