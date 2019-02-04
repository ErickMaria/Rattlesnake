import * as express from 'express'
import { ConfigENV } from './utils/configenv';
import { Bot } from './bot/bot';

export class RattleSnakeBase {
    
    public app: express.Application;
    public runAs: string;
    public loadBot: Bot;
    public actionsRouter: express.Router;
    public eventsRouter: express.Router;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public routes(){
        this.app.use(`/${ConfigENV.get()['API_VERSION']}/slack/actions`, () => {

        });

        this.app.use(`/${ConfigENV.get()['API_VERSION']}/slack/events`, () => {

        });

    };

    public config(): void{};

}