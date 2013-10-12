'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: String,
  image: String,
  link: String,
  about: String,
  owner: Schema.Types.ObjectId
});

module.exports = mongoose.model('Company', companySchema);