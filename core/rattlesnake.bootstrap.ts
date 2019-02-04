import * as express from 'express'
import { Application } from '../src/application'
import { RattleSnakeBase } from './rattlesnake.base';

export class RattleSnake extends RattleSnakeBase{

    public static bootstrap(): RattleSnakeBase{
        return new Application();
    }

}