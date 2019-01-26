import { Request, Response, NextFunction } from 'express';

export abstract class Controller{
    public get(req : Request, res: Response, next?: NextFunction): any{}
    public post(req : Request, res: Response, next?: NextFunction): any{}
    public put(req : Request, res: Response, next?: NextFunction): any{}
    public delete(req : Request, res: Response, next?: NextFunction): any{}
}