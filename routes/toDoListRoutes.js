let express = require('express');
let router = express.Router();
let toDoListConttrollers = require('../controllers/toDoListController')
router.post("createTask",toDoListConttrollers.createTask)

module.exports = router;