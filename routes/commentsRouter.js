const Router = require('express');
const router = new Router();
const commentsController = require('../controllers/commentsController')

router.get('/', commentsController.getAll);
router.get('/:id', commentsController.getOne);

module.exports = router;