import { BotEvents } from "../../../core/bot/asserver/bot.events";
import { BotServer } from "../../../core/bot/asserver/bot.server";
import { Commands } from "../../../core/commads/bot.command";
import { UrlBuilder } from "../../../core/builders/url/url.builder";
import * as shellJS from 'shelljs';
import { listContainer } from "../../../core/builders/attachments/attachments.type";

export class BotInteractiveEvents extends BotEvents {

    ub = new UrlBuilder();

    constructor(bserver: BotServer) {
        super(bserver);
    }

    loadEvents(): void {

        this.events.on('message', (event: any) => {
            var command: string = '';

            if (this.forceCallByName(event)) {
                
                event.text.trim().split(' ').forEach((element: string, index: number) => {
                    if (index > 0) {
                        command = command + element + ' ';
                    }
                });

                this.listContainers(command, event);
            }
        });
    }

    listContainers(command: string, event: any){
        Commands.exec(command, () => {
            const data = JSON.parse(
                shellJS.exec(
                    this.ub.builder('https', {
                        uri: '/deployments'
                    })
                ).stdout);

            var containers = '';

            data.data.forEach((element: any) => {
                element.containers.forEach((element: any) => {
                    containers = containers + element.name + '\n';
                });
            });

            this.bserver.bot.chat.postMessage({ channel: event.channel, text: containers });
        });
    }

}