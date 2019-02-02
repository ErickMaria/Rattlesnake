import { ConfigENV } from './utils/configenv'
import SlackBot from 'slackbots'

var bot = new SlackBot({
    token: ConfigENV.get()['SLACK_BOT_TOKEN'], // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'rattlesnakebot'
});

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
});

bot.on('start', function () {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':snake:'
    };
});

console.log('\nBot is running...\n')