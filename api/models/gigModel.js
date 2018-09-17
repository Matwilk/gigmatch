'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GigSchema = new Schema({
  title: {
    type: String,
    required: 'Enter a headline'
  },
  description: {
    type: String,
    required: 'Enter a description'
  },
  location: {
    type: String,
    required: 'Enter a location'
  },
  date: {
    type: Date,
    required: 'Enter a date'
  },
  fee: {
    type: Number,
    required: 'Enter a fee'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }
    ],
    default: ['pending']
  }
});

module.exports = mongoose.model('Gigs', GigSchema);
