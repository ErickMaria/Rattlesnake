import { ConfigENV } from "../../utils/configenv";
import { BotServer } from "./bot.server";

const { createEventAdapter } = require('@slack/events-api');

export abstract class BotEvents{

    public events: any;
    public bserver: BotServer;
    private botID: string = `^(<@${ConfigENV.get()['SLACK_BOT_ID']}>)`

    constructor(bserver: BotServer){
        this.events = createEventAdapter(ConfigENV.get()['SLACK_SIGNING_SECRET']);
        this.bserver = bserver;
    }

    public loadEvents(): void {};

    public forceCallByName(event: any): boolean {
        if (event.text.match(this.botID)){
            return true;
        }
        return false;
    }

}