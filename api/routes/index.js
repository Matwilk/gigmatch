import express from 'express';
import { bandRouter } from './bandRoutes';
import { gigRouter } from './gigRoutes';

const routes = express.Router();

routes.use('/gig', gigRouter);
routes.use('/band', bandRouter);

export default routes;
