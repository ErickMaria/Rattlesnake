import { ServerAsServer } from "../server.server";
import { Server } from "../server";
import { ServerAsBot } from "../server.bot";
import { ApplicationBootstrap } from "../../application.bootstrap";
import { LoaderType } from "./laoder.type";

export class Loader{

    private runAsVerify(runAs: string){
        if(runAs.toUpperCase() !== LoaderType.SERVER && runAs.toUpperCase() !== LoaderType.BOT){
            console.error(`run as application ${runAs} is invalid, accept just SERVER or BOT`);
            process.exit(1); 
        }
    }

    public loadServerAs(): Server{

        const appRunAs = ApplicationBootstrap.bootstrap();
        
        this.runAsVerify(appRunAs.runAs);

        if(appRunAs.runAs.toLocaleUpperCase() === LoaderType.SERVER){
            return new ServerAsServer(appRunAs);
        }

        return new ServerAsBot(appRunAs.loadBot);

    }

}