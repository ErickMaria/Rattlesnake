import { ConfigENV } from "../utils/configenv";

const { createEventAdapter } = require('@slack/events-api');

export abstract class BotEvents{

    events: any;

    constructor(){
        this.events = createEventAdapter(ConfigENV.get()['SLACK_SIGNING_SECRET']);
    }

    loadEvents(): void {};
}