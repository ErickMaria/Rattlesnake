import { Request, Response, NextFunction } from 'express';

export interface IController{
    post(req : Request, res: Response, next?: NextFunction): any;
}