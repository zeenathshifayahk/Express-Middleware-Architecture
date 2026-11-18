/**
 * Express Middleware Architecture — Build the Pipeline
 *
 * Global middleware order:
 *   1) requestId — attaches a UUID to req and the X-Request-Id header
 *   2) logger    — logs method, path, and final response status
 *   3) timing    — logs request duration
 *
 * Run it with: npm start
 */

const express = require('express');

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const requestId = require('./middleware/requestId');
const logger = require('./middleware/logger');
const timing = require('./middleware/timing');

const app = express();

// Parse JSON bodies before route handlers.
app.use(express.json());

// Global middleware must run before the routers, in this exact order.
app.use(requestId);
app.use(logger);
app.use(timing);

// Routers.
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

module.exports = app;
