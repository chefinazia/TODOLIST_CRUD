
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.createTask = (req,res) => {
    let newTask = new Task(req.body);
    newTask.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.getAllTask = (req,res) => {
    Task.find({}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
}

exports.getATask = (req,res) => {
    Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}

exports.updateTask = (req,res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
}

exports.deleteTask = (req,res) => {
    Task.remove({
        _id: req.params.taskId
      }, function(err, task) {
        if (err)
          res.send(err);
        res.json({ message: 'Task successfully deleted' });
      });
}