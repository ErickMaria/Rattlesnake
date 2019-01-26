import { Controller } from "./Controller";
import { Request, Response, NextFunction } from 'express';

export class EventsController extends Controller{
    public get(req : Request, res: Response): any{
        res.send({'message': 'events'});
    }

}