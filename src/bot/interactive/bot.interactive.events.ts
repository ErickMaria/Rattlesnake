import { BotEvents } from "../../../core/bot/asserver/bot.events";
import { BotServer } from "../../../core/bot/asserver/bot.server";

export class BotInteractiveEvents extends BotEvents {

    constructor(bserver: BotServer) {
        super(bserver);
    }

    loadEvents(): void {

        this.events.on('message', (event: any) => {
            if (this.forceCallByName(event)){
                this.bserver.bot.chat.postMessage({ channel: event.channel, text: 'Hello there' });
                //console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}.`);
            }
        });
    }

}