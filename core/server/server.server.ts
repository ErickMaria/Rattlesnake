import { createServer } from 'http'
import { Server } from './server';
import { ApplicationBase } from '../application.base';
import { ApplicationBootstrap } from '../application.bootstrap';
//import { RattleSnake } from '../rattlesnake.bootstrap';

export class ServerAsServer implements Server {
    
    private server: ApplicationBootstrap;
    
    constructor(server: ApplicationBootstrap){
        this.server = server;
    }

    public load() {

        // const HOST = ConfigENV.get()['HOST'];
        // const PORT = parseInt(ConfigENV.get()['PORT']);
        // const TypeBotOn = ConfigENV.get()['BOT_CONTEXT'];

        // createServer(this.server.app).listen(PORT, HOST, () => {
        //     console.log(`Bot On as ${TypeBotOn} mode`);
        //     console.log(`Server running on http://${HOST}:${PORT}`);
        // })
    }
}