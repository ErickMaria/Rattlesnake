import { Bot } from "../../../core/bot/bot";
import { ConfigENV } from "../../../core/utils/configenv";
const SlackBot = require('slackbots');
const shell = require('shelljs');
var channel = "teste2";


export class BotSimple implements Bot {
    run(): void {
        this.init();
    }

    private init() {

        var bot = new SlackBot({
            token: ConfigENV.get()['SLACK_BOT_TOKEN'],
            name: 'rattlesnake'
        
        });

        bot.on('start', () => {
            var params = {
                icon_emoji: ':cat:'
            };
            bot.postMessageToChannel(channel, "Hello world!");
            console.log("Hello world!");
        });

        bot.on("message", function(data: any) {
            if (data.type !== "message") {
                return;
            }
        
            handleMessage(data.text);
        });
        
        function handleMessage(message: any) {
                var msg = message.split("=");
                if(message === 'hi'){
                  sendGreeting();
                }
                if(msg[0] === "set_container"){
                    var nomeContainer = msg[1];
                    bot.postMessageToChannel(channel, "Container: "+nomeContainer+ " escolhido com sucesso :grin:");
                }
                if(msg[0] === "list_container"){
                    getNamespacesAsMensage();
                }
                if(msg[0] === "lists_pods"){
                    getNamespacesAsMensage2();
                }
                if(msg[0] === "set_pod"){
                   var nomePod = msg[1];
                    bot.postMessageToChannel(channel, "Pod: "+nomePod+ " escolhido com sucesso :grin:" );
        
                }
                if(msg[0] === "adionar_arquivo"){ 
                    if(nomeContainer !=null && nomePod !=null){
                        adionarArquivo();
                    }else{
                        if(nomeContainer ==null && nomePod != null){
                          bot.postMessageToChannel(channel, "Container não selecionado :thinking_face:");
                        }
                        if(nomeContainer !=null && nomePod == null){
                            bot.postMessageToChannel(channel, "Pod não selecionado :thinking_face:");
                          }
                          if(nomeContainer ==null && nomePod == null){
                            bot.postMessageToChannel(channel, "Container e Pod não selecionado :thinking_face:");
                          }
                        
                            
                          
        
                    }
                    
                }
        
        }
        
        function sendGreeting() {
            var greeting = getGreeting();
            bot.postMessageToChannel(channel, greeting);
        }
        function sendOpcoes() {
            var opcoes = getOpçoes();
            bot.postMessageToChannel(channel, opcoes);
        }
        
        function getGreeting() {
            var greetings = [
                "hello!",
                "hi there!",
                "cheerio!",
                "how do you do!",
                "¡hola!"
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        function getOpçoes() {
            var greetings = 
                "[Listar Containers]";
            return greetings;
        }
        
         function getNamespacesAsMensage(){
             var result = shell.exec("curl http://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:8443/k8s/clusters/c-p9wrn/api/v1/namespaces").stdout;
             var RancherAPIResult = JSON.parse(result);
             var msg = '';
             RancherAPIResult.items.forEach((items: any, index :any)=>{
                 msg = msg + (items.metadata.name + "\n");
             });
                                
                bot.postMessageToChannel(channel, msg);
             return msg;
            }
            function getNamespacesAsMensage2(){
                var result = shell.exec("curl http://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:8443/k8s/clusters/c-p9wrn/api/v1/namespaces/labs/pods").stdout;
                var RancherAPIResult = JSON.parse(result);
                var msg = '';
                RancherAPIResult.items.forEach((items: any, index: any)=>{
                    msg = msg + (items.metadata.name + "\n");
                });
                bot.postMessageToChannel(channel, msg);
                return msg;
               }
        
               // wscat -c "ws://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:8443/k8s/clusters/c-p9wrn/api/v1/namespaces/labs/pods/node-6cd746f767-t9f78/exec?stdout=1&stdin=1&sterr=1&tty=1&container=node&command=ls"
               // wscat -c "ws://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:8443/k8s/clusters/c-p9wrn/api/v1/namespaces/labs/pods/node-6cd746f767-t9f78/exec?stdout=1&stdin=1&sterr=1&tty=1&container=node&command=wget&command=https://pastebin.com/raw/QAMv0tts"
               // wscat -c "ws://ec2-13-59-68-156.us-east-2.compute.amazonaws.com:8443/k8s/clusters/c-p9wrn/api/v1/namespaces/labs/pods/node-5f74d695f9-6pbmf/exec?stdout=1&stdin=1&sterr=1&tty=1&container=node&command=wget&command=https://pastebin.com/raw/QAMv0tts&command=-P&command=/config"
            
            function adionarArquivo(){
             bot.postMessageToChannel(channel, " Arquivo adicionado com sucesso :grin:")
        
            }
        
        
            function getMessageAddFile(message: any){
             var mensagem = message
             bot.postMessageToChannel(channel, mensagem);
        
            }

    }

}