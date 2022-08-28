let express = require('express');
let router = express.Router();
let toDoListConttrollers = require('../controllers/toDoListController')

router.post("/createTask",toDoListConttrollers.createTask)
router.post("/getAllTask",toDoListConttrollers.getAllTask)
router.post("/getATask",toDoListConttrollers.getATask)
router.post("/updateTask",toDoListConttrollers.updateTask)
router.post("/deleteTask",toDoListConttrollers.deleteTask)

module.exports = router;