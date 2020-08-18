'use strict';

/**
 * Module dependencies.
 */

const express   = require('express');
const router    = express.Router();
const env       = process.env.NODE_ENV || 'development';
const statusMonitor = require('express-status-monitor')();

/**
 * Expose
 */

module.exports = app => {
  app.use(statusMonitor);

  router.get('/', (req, res, next) => {
    try {
      res.send(' Server');
    } catch (e) {
      logger.error(e, 'err in / path');
      next(e);
    }
  });
  router.get('/status', statusMonitor.pageRoute);
  app.use('/', router);
};
