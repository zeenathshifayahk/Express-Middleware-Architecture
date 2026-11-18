/**
 * Posts router (mounted at /posts in app.js).
 *
 * auditWrite is mounted only on POST / to demonstrate per-route middleware.
 */

const express = require('express');
const router = express.Router();

const auditWrite = require('../middleware/auditWrite');

const posts = [{ id: 1, title: 'Hello World' }];

// Public read — auditWrite does not run here.
router.get('/', (req, res) => {
  res.json({ data: posts });
});

// Audit only write requests.
router.post('/', auditWrite, (req, res) => {
  const post = { id: posts.length + 1, title: req.body.title || 'Untitled' };
  posts.push(post);
  res.status(201).json({ data: post });
});

module.exports = router;
