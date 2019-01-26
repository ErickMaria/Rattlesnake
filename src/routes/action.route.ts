import * as express from 'express';
import { ActionController } from '../controllers/action.controller';

const controller = new ActionController();
export const actionRoute = express.Router();

actionRoute.post('/', controller.post);