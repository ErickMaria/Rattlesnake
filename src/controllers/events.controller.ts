import { IController } from "./IController";
import { Request, Response, NextFunction } from 'express';

export class EventsController implements IController{
    
    public post(req : Request, res: Response): any{
        res.send({'message': 'events'});
    }

}