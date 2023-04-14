const Router = require('express');
const router = new Router();
const commentsRouter = require('./commentsRouter')

router.use('/comments', commentsRouter);

module.exports = router;