/**
 * requestId middleware [mount GLOBALLY in app.js]
 *
 * Generates a unique ID for each request, attaches it to req.id, and
 * exposes it in the X-Request-Id response header.
 */

const { randomUUID } = require('crypto');

module.exports = function requestId(req, res, next) {
  const id = randomUUID();
  req.id = id;
  res.setHeader('X-Request-Id', id);
  next();
};
