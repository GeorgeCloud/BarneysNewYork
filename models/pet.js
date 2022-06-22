"use strict";

const mongoosePaginate = require('mongoose-paginate');
const mongoose = require('mongoose'),

Schema = mongoose.Schema;

mongoosePaginate.paginate.options = {
  limit: 6
};

const PetSchema = new Schema({
  name         : { type: String, required: true },
  birthday     : { type: String, required: true },
  species      : { type: String, required: true },
  picUrl       : { type: String },
  picUrlSq     : { type: String},
  price        : { type: Number, required: true },
  avatarUrl    : { type: String, required: true },
  favoriteFood : { type: String, required: true },
  description  : { type: String, minlength: 140, required: true }
}, {
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
