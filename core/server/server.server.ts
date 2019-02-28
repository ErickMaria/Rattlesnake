import * as express from 'express'
import { createServer } from 'http'
import { ConfigENV } from '../utils/configenv';
import { Server } from './server';
import { RattleSnake } from '../rattlesnake.bootstrap';

export class ServerAsServer implements Server {
    
    private server: RattleSnake;
    
    constructor(server: RattleSnake){
        this.server = server;
    }

    public run() {

        const HOST = ConfigENV.get()['HOST'];
        const PORT = parseInt(ConfigENV.get()['PORT']);

        createServer(this.server.app).listen(PORT, HOST, () => {
            console.log(`Server running on http://${HOST}:${PORT}`);
        })
    }
}