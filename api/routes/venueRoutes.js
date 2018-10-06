import express from 'express';
import venueController from '../controllers/venueController';

export const venueRouter = express.Router();

venueRouter.param('id', venueController.findByParam);

venueRouter
  .route('/')
  .get(venueController.getAll)
  .post(venueController.createOne);

venueRouter
  .route('/:id')
  .get(venueController.getOne)
  .put(venueController.updateOne)
  .delete(venueController.createOne);
