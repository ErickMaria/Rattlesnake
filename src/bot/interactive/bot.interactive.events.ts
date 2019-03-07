import { BotEvents } from "../../../core/bot/asserver/bot.events";
import { BotServer } from "../../../core/bot/asserver/bot.server";
import { Commands } from "../../../core/commads/bot.command";
import { UrlBuilder } from "../../../core/builders/url/url.builder";
import * as shellJS from 'shelljs';

export class BotInteractiveEvents extends BotEvents {

    constructor(bserver: BotServer) {
        super(bserver);
    }

    loadEvents(): void {
        const ub = new UrlBuilder();

        this.events.on('message', (event: any) => {
            var command: string = '';

            if (this.forceCallByName(event)) {
                event.text.trim().split(' ').forEach((element: string, index: number) => {
                    if (index > 0) {
                        command = command + element + ' ';
                    }
                });

                Commands.exec(command.trim(), () => {
                    const data = JSON.parse(
                        shellJS.exec(
                            ub.builder('https', {
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
        });
    }

}