import { ConfigENV } from "../../utils/configenv";

const { WebClient, RTMClient } = require('@slack/client');


export class BotServer {
    
    private token = ConfigENV.get()['SLACK_BOT_TOKEN'];
    public botWEB: any;
    public botRTM: any;

    constructor(){
        this.botWEB = new WebClient(this.token);
        this.botRTM = new RTMClient(this.token)
        //this.bot.start();
    }

    private on(): void {
        
    }

}