import { Server } from "./server";
import { Bot } from "../bot/bot";
import { } from "../../src/bot/simple/bot.simple";

export class ServerAsBot implements Server{
    
    private bot: Bot;

    constructor(bot: Bot){
        this.bot = bot;
    }

    run(): void {
        this.bot.run();

        console.log("Bot's running");
    }

}