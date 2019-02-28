import * as express from 'express'
import { ConfigENV } from './utils/configenv';
import { Bot } from './bot/bot';
import { BotEvents } from './bot/bot.events';
import { BotActions } from './bot/bot.actions';

export class RattleSnakeBase {
    
    public app: express.Application;
    public runAs: string;
    public loadBot: Bot;
    public loadEvents: BotEvents;
    public loadActions: BotActions;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private routes(){
        this.app.use(`/${ConfigENV.get()['API_VERSION']}/slack/actions`, this.loadActions.actions.expressMiddleware());
        this.app.use(`/${ConfigENV.get()['API_VERSION']}/slack/events`, this.loadEvents.events.expressMiddleware());

        this.loadEvents.loadEvents();
        this.loadActions.loadActions();
    };

    public config(): void{};

}