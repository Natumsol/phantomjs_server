'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Monitor Schema
 */
var Task = new Schema({
    appId: Schema.ObjectId,
    url: String,
    diffRules: [String],
    domRules: [String],
    base: Number
});

mongoose.model('Task', Task);
