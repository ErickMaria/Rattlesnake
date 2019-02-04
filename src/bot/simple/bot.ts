import { Bot } from "../../../core/bot/bot";
const SlackBot = require('slackbots');


export class BotSimple implements Bot {
    run(): void {
        this.init();
    }

    private init() {

        // var bot = new SlackBot({
        //     token: ConfigENV.get()['SLACK_BOT_TOKEN'], // Add a bot https://my.slack.com/services/new/bot and put the token 
        //     name: 'rattlesnakebot'
        // });

        // bot.on('message', (data: any) => {
        //     // all ingoing events https://api.slack.com/rtm
        //     if(data.type == "message"){
        //         console.log(data);
        //     }
        // });

        // bot.on('start', () => {
        //     // more information about additional params https://api.slack.com/methods/chat.postMessage
        //     var params = {
        //         icon_emoji: ':snake:',
        //         attachments: [
        //             {
        //                 "color": "#36a64f",
        //                 "pretext": ""
        //             }
        //         ]

        //     };

        //     bot.postMessageToChannel('teste2', '', params);
        // });

    }

}