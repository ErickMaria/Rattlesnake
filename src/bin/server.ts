import * as express from 'express';
import * as bodyParser from 'body-parser';

export class Server {
    
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    public config(){
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        this.app.use(bodyParser.json())
    }

}