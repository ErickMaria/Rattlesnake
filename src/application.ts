import * as express from 'express';
import * as bodyParser from 'body-parser';
import { EnvConfig } from './utils/environment';
import { slackEvents } from './bot/events/events';
import { slackInteractions } from './bot/interactions/interactions';

export class Application {
    
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.router();
    }

    public static bootstrap(): express.Application {
        return new Application().app;
    }

    public config(){
        //this.app.use(bodyParser.urlencoded({ extended: false }))
        //this.app.use(bodyParser.json())
    }

    public router(){
        this.app.use('/slack/action', slackInteractions.expressMiddleware());
        this.app.use('/slack/events', slackEvents.expressMiddleware());
    }

}