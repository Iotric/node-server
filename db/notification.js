'use strict';
const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const uniqueValidator = require('mongoose-unique-validator');


const NotificationSchema = new mongoose.Schema({
  userId                : { type: objectId, ref: 'EnterpriseUser' },
  type                  : { type: String, required: true },
  isRead                : { type: Boolean, required: true, default: false},
  metadata              : {}

}, { timestamps: true, versionKey: false });

NotificationSchema.plugin(uniqueValidator, { message: "Duplicate Entry {PATH}" });

NotificationSchema.pre('save', async function (next) {
  //Add any pre processing of notification object here
  next();
});

const NotificationModel = mongoose.model('Notification', NotificationSchema);
module.exports = NotificationModel;
