import { ConfigENV } from "../../utils/configenv";
import { BotServer } from "./bot.server";

const { createEventAdapter } = require('@slack/events-api');

export abstract class BotEvents{

    public events: any;
    public bserver: BotServer;

    constructor(bserver: BotServer){
        this.events = createEventAdapter(ConfigENV.get()['SLACK_SIGNING_SECRET']);
        this.bserver = bserver;
    }

    loadEvents(): void {};
}