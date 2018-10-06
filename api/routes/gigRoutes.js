'use strict';

import express from 'express';
import gigController from '../controllers/gigController';

export const gigRouter = express.Router();

gigRouter.param('id', gigController.findByParam);

gigRouter
  .route('/')
  .get(gigController.getAll)
  .post(gigController.createOne);

gigRouter
  .route('/:id')
  .get(gigController.getOne)
  .put(gigController.updateOne)
  .delete(gigController.deleteOne);

//app.route('/index/gigs/search').get(es.searchGigs);
