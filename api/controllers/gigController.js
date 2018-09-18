'use strict';

const Gig = require('../models/gigModel');

exports.list_all_gigs = function(req, res) {
  Gig.find({}, function(err, gig) {
    if (err) res.sendStsatus(404);
    res.json(gig);
  });
};

exports.create_a_gig = function(req, res) {
  const new_gig = new Gig(req.body);
  new_gig.save(function(err, gig) {
    if (err) res.sendStatus(404);
    res.json(gig);
  });
};

exports.read_a_gig = function(req, res) {
  Gig.findById(req.params.gigId, function(err, gig) {
    if (err) res.sendStatus(404);
    res.json(gig);
  });
};

exports.update_a_gig = function(req, res) {
  Gig.findOneAndUpdate(
    { _id: req.params.gigId },
    req.body,
    { new: true },
    function(err, gig) {
      if (err) res.sendStatus(404);
      res.json(gig);
    }
  );
};

exports.delete_a_gig = function(req, res) {
  Gig.remove(
    {
      _id: req.params.gigId
    },
    function(err) {
      if (err) res.send(err);
      res.json({ message: 'Gig successfully deleted' });
    }
  );
};
