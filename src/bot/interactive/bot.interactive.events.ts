import { BotEvents } from "../../../core/bot/asserver/bot.events";
import { BotServer } from "../../../core/bot/asserver/bot.server";
import { ConfigENV } from "../../../core/utils/configenv";

export class BotInteractiveEvents extends BotEvents {

    constructor(bserver: BotServer) {
        super(bserver);
    }

    loadEvents(): void {
        
        const botID = `^(<@${ConfigENV.get()['SLACK_BOT_ID']}>)`;

        this.events.on('message', (event: any) => {
            if (event.text.match(botID)){
                this.bserver.botWEB.chat.postMessage({ channel: event.channel, text: 'Hello there' });
                //console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}.`);
            }
        });
    }

}