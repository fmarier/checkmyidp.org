/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*
 *     const logger = require('../libs/logging.js').logger;
 *     logger.debug("you can probably ignore this.  just for debugging.");
 *     logger.info("something happened, here's info about it!");
 *     logger.warn("this isn't good.  it's not a fatal error, but needs attention");
 *     logger.error("this isn't good at all.  I will probably crash soon.");
 */

module.exports = {
  debug: function(msg) {
    console.log(msg);
  },
  info: function(msg) {
    console.log(msg);
  },
  warn: function(msg) {
    console.log(msg);
  },
  error: function(msg) {
    console.log(msg);
  }
};

