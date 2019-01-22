'use strict';

var SlackBot = require("slackbots");
const shell = require('shelljs');
require("dotenv").config();

var bot = new SlackBot({
    token: process.env.SLACK_API_TOKEN,
    name: 'rattlesnake'
});

bot.on('start', () => {
    var params = {
        icon_emoji: ':cat:'
    };
});

bot.on('message', (data) => {
    // all ingoing events https://api.slack.com/rtm
    if(data.content != undefined){
        var messasePure = data.content.split(" ");
        if(messasePure[messasePure.length-1] === 'hi'){
            bot.postMessageToChannel('testes', 'Hi user, what do u wish?');
        }
    }
});
