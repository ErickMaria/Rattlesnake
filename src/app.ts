import * as express from 'express';
import * as bodyParser from 'body-parser';
import { actionRoute } from './routes/action.route';
import { eventsRoute } from './routes/events.router';

export class Application {
    
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.router();
    }

    public static bootstrap(): Application {
        return new Application();
    }

    public config(){
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }

    public router(){
        this.app.use('/action', actionRoute);
        this.app.use('/events', eventsRoute)
    }

}
