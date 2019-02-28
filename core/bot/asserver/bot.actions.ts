import { ConfigENV } from "../../utils/configenv";
const { createMessageAdapter } = require('@slack/interactive-messages'); 

export class BotActions{

    actions: any;

    constructor(){
        this.actions = createMessageAdapter(ConfigENV.get()['SLACK_SIGNING_SECRET']);
    }

    loadActions(): void {};
}
