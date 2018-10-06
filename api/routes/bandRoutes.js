import express from 'express';
import bandController from '../controllers/bandController';

export const bandRouter = express.Router();

bandRouter.param('id', bandController.findByParam);

bandRouter
  .route('/')
  .get(bandController.getAll)
  .post(bandController.createOne);

bandRouter
  .route('/:id')
  .get(bandController.getOne)
  .put(bandController.updateOne)
  .delete(bandController.createOne);
