'use strict';

module.exports = function(app) {
  const gigs = require('../controllers/gigController');
  const es = require('../controllers/esController');

  // todoList Routes
  app
    .route('/api/gigs')
    .get(gigs.list_all_gigs)
    .post(gigs.create_a_gig);

  app
    .route('/api/gig/:gigId')
    .get(gigs.read_a_gig)
    .put(gigs.update_a_gig)
    .delete(gigs.delete_a_gig);

  app.route('/index/gigs/index').get(es.indexGigs);

  app.route('/index/gigs/search').get(es.searchGigs);
};
