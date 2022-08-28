let express = require('express');
let router = express.Router();
let toDoListConttrollers = require('../controllers/toDoListController')

router.post("/createTask",toDoListConttrollers.createTask)
router.post("/getAllTask",toDoListConttrollers.getAllTask)
router.post("/getATask/:taskId",toDoListConttrollers.getATask)
router.post("/updateTask/:taskId",toDoListConttrollers.updateTask)
router.post("/deleteTask/:taskId",toDoListConttrollers.deleteTask)

module.exports = router;