const router = require('express').Router()
const Todo = require('../models/Todo')
const controller = require('../controllers/todoController');


router.post('/', controller.create);
router.get('/', controller.read);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;