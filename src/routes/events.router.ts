import * as express from 'express';
import { EventsController } from '../controllers/events.controller';

const controller = new EventsController();
export const eventsRoute = express.Router();

eventsRoute.post('/', controller.post);