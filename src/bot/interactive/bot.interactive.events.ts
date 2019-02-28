import { BotEvents } from "../../../core/bot/bot.events";

export class BotInteractiveEvents extends BotEvents {

    constructor(){
        super();
    }

    loadEvents(): void {
        this.events.on('message', (event: any) => {
            console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
          });
    }

}