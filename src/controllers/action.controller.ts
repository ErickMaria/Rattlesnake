import { IController } from "./IController";
import { Request, Response, NextFunction } from 'express';

export class ActionController implements IController{
    
    public post(req : Request, res: Response): any{
        const payload = JSON.parse(req.body.payload);
        console.log(payload.actions[0].selected_options);
        res.send(payload.actions[0].selected_options[0].value+', Great choice '+payload.user.name);
    }
}