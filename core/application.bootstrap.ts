import * as express from 'express'
import { Application } from './application'
import { ApplicationBase } from './application.base';

export class ApplicationBootstrap extends ApplicationBase{

    public static bootstrap(): ApplicationBase{
        return new Application();
    }

}