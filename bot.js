'use strict';

var SlackBot = require("slackbots");
const shell = require('shelljs');
require("dotenv").config();

// function getNamespacesAsMensage(){
//     var result = shell.exec("curl http://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:5000/k8s/clusters/c-dpvn9/api/v1/namespaces").stdout;
//     var RancherAPIResult = JSON.parse(result);
//     var msg = '';
//     RancherAPIResult.items.forEach((items, index)=>{
//         msg = msg + (items.metadata.name + "\n");
//     });

//     return msg;
// }

// function getContainerByNamespace(namespace){
//     var result = shell.exec(`curl http://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:5000/k8s/clusters/c-dpvn9/api/v1/namespaces/${namespace}/pods`);
// }

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
    // if(data.content != undefined){
    //     var messasePure = data.content.split(" ");
    //     if(messasePure[messasePure.length-1] === 'hi'){
    //         bot.postMessageToChannel('testes', 'Hi user, what do u wish?');
    //     }if(messasePure[messasePure.length-1] === 'namespaces'){
    //         bot.postMessageToChannel('testes', getNamespacesAsMensage());
    //     }
    // }
});