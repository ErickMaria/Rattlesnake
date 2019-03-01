import { ConfigENV } from "../../utils/configenv";

const { WebClient, RTMClient, IncomingWebhook } = require('@slack/client');

enum TypeBot {
    WEB = 'WEB',
    RTM = 'TRM',
    WH = 'WEBHOOK'
}

export class BotServer {

    private token = ConfigENV.get()['SLACK_BOT_TOKEN'];
    
    //public botWEB: any;
    //public botRTM: any;
    //public botWH: any;

    public bot: any;
    private WHUrl: string;

    constructor(typeBot: string,WHUrl?: string) {
        this.WHUrl = WHUrl;
        this.onBot(typeBot);

    }

    private onBot(type: string): void {
        if (type === TypeBot.WEB) {
            this.bot = new WebClient(this.token);
            return;
        } else if (type === TypeBot.RTM) {
            this.bot = new RTMClient(this.token);
            this.bot.start();
            return;
        } else if (type === TypeBot.WH) {
            if (this.WHUrl == null) {
                console.error('Slack bot as Webhook is required');
                process.exit(1);
            }
            this.bot = new IncomingWebhook(this.WHUrl);
            return;
        }

        console.error('Type Bot is invalid');
        process.exit(1);
    }

}