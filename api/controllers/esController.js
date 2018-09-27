'use strict';

const elasticsearch = require('elasticsearch');
const Gig = require('../models/gigModel');

const client = new elasticsearch.Client({
  hosts: [
    'https://6qp7h5idnf:vq4dvp5rzc@gigmatch-1202391396.eu-west-1.bonsaisearch.net'
  ]
});

const ensureIndex = index => {
  return new Promise(resolve => {
    client.indices.exists({ index: index }).then(exists => {
      if (exists) {
        resolve();
      } else {
        client.indices
          .create({
            index: index
          })
          .then(() => {
            resolve();
          });
      }
    });
  });
};

exports.indexGigs = function(req, res) {
  ensureIndex('gigs')
    .then(() => {
      return Gig.find({});
    })
    .then(gigs => {
      gigs.map(gig => {
        client.index(
          {
            index: 'gigs',
            type: 'gig',
            id: gig._id.toString(),
            body: {
              title: gig.title,
              fee: gig.fee,
              date: gig.date,
              description: gig.description,
              location: {
                lat: gig.lat,
                lon: gig.long
              }
            }
          },
          (err, resp) => {
            if (err) {
              console.log(
                'Failed to index gig with id =' + gig._id + ', err = ' + err
              );
            } else {
              console.log(
                'Successfully indexed gig with id =' +
                  gig._id +
                  ', resp = ' +
                  resp
              );
            }
          }
        );
      });
      res.status(204);
      res.json({});
    })
    .catch(err => {
      res.err(err);
    });
};

exports.searchGigs = function(req, res) {
  const matches = Object.keys(req.query).reduce((acc, key) => {
    const match = { match: {} };
    match.match[key] = req.query[key];
    acc.push(match);
    return acc;
  }, []);
  console.log('matches', matches);
  client
    .search({
      index: 'gigs',
      type: 'gig',
      body: {
        query: {
          bool: {
            should: matches
          }
        }
      }
    })
    .then(
      function(resp) {
        console.log(resp.hits);
      },
      function(err) {
        console.trace(err.message);
      }
    );
  res.status(204);
  res.json({});
};
