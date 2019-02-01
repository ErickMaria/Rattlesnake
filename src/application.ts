import * as express from 'express';
import * as bodyParser from 'body-parser';
import { actionRoute } from './routes/action.route';
import { eventsRoute } from './routes/events.router';
import { EnvConfig } from './utils/environment';

const { createEventAdapter } = require('@slack/events-api');
const slackEvents = createEventAdapter(EnvConfig.get()['SLACK_SIGNING_SECRET']);


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
        this.app.use('/slack/action', actionRoute);
        this.app.use('/slack/events', slackEvents.expressMiddleware());
    }

}