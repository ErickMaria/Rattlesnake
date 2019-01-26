import { EnvConfig } from "../utils/environment";
import { WebClient } from '@slack/client';
const menu = {
    "text": "Choose a game to play",
    "fallback": "If you could read this message, you'd be choosing something fun to do right now.",
    "color": "#3AA3E3",
    "attachment_type": "default",
    "callback_id": "game_selection",
    "actions": [
        {
            "name": "games_list",
            "text": "Pick a game...",
            "type": "select",
            "options": [
                {
                    "text": "Hearts",
                    "value": "hearts"
                },
                {
                    "text": "Bridge",
                    "value": "bridge"
                },
                {
                    "text": "Checkers",
                    "value": "checkers"
                },
                {
                    "text": "Chess",
                    "value": "chess"
                },
                {
                    "text": "Poker",
                    "value": "poker"
                },
                {
                    "text": "Falken's Maze",
                    "value": "maze"
                },
                {
                    "text": "Global Thermonuclear War",
                    "value": "war"
                }
            ]
        }
    ]
}

export class Bot {
    private token: string;
    private web: WebClient;
    private conversationId: string;
    private menu: string;
    constructor() {
        this.token = EnvConfig.get()['SLACK_BOT_TOKEN'];
        this.conversationId = 'DFP3RHK8Q';
        this.web = new WebClient(this.token);
        this.send();
    }

    private send(): void {
        this.web.chat.postMessage({
            channel: this.conversationId, text: 'Hello there', attachments: [menu]

        }).then((res) => {
            console.log('Message sent: ', res.ok);
        }).catch(console.error);
    }

    public static run(): Bot {
        return new Bot();
    }

}