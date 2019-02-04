import { ServerAsServer } from "../server/server.server";
import { RattleSnake } from "../rattlesnake.bootstrap";
import { Server } from "../server/server";
import { ServerAsBot } from "../server/server.bot";

enum RunAsType {
    SERVER = 'SERVER',
    BOT = 'BOT'
}

export class Loader{

    private runAsVerify(runAs: string){
        if(runAs.toUpperCase() !== RunAsType.SERVER && runAs.toUpperCase() !== RunAsType.BOT){
            console.error(`run as application ${runAs} is invalid, accept just SERVER or BOT`);
            process.exit(1); 
        }
    }

    public loadServerAs(): Server{

        const rattlesnakeRunAs = RattleSnake.bootstrap();
        
        this.runAsVerify(rattlesnakeRunAs.runAs);

        if(rattlesnakeRunAs.runAs.toLocaleUpperCase() === RunAsType.SERVER){
            return new ServerAsServer(rattlesnakeRunAs);
        }

        return new ServerAsBot(rattlesnakeRunAs.loadBot);

    }

}