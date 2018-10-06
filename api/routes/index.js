import express from 'express';
import { bandRouter } from './bandRoutes';
import { gigRouter } from './gigRoutes';
import { venueRouter } from './venueRoutes';

const routes = express.Router();

routes.use('/gig', gigRouter);
routes.use('/band', bandRouter);
routes.use('/venue', venueRouter);

export default routes;
