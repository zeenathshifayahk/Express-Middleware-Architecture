/**
 * logger middleware [mount GLOBALLY in app.js]
 *
 * Logs the request method, path, and final response status when the
 * response has finished.
 */

module.exports = function logger(req, res, next) {
  res.on('finish', () => {
    const shortId = req.id ? `[${req.id.substring(0, 8)}] ` : '';
    console.log(`${shortId}${req.method} ${req.path} ${res.statusCode}`);
  });

  next();
};
