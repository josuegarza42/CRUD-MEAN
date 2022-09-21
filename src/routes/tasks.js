const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-db', ['tasks']);

//get all tasks from database
router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

//get single tasks from database

router.get('/tasks/:id', (req, res, next) => {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) return next(err);
        res.json(task);
    });
});





//save task to database
router.post('/tasks', (req, res, next) => {
    const task = req.body;
    if (!task.title || !(task.isDone + '')) {
        res.status(400).json({
            error: 'Bad Data'
        });
    } else {
        db.tasks.save(task, (err, task) => {
            if (err) return next(err);
            res.json(task)
        });
    }
});


//delete task from database
router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

//update task from database
router.put('/tasks/:id', (req, res, next) => {
    const task = req.body;
    const updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, (err, result) => {
            if (err) return next(err);
            res.json(result);
        });
    }
});

module.exports = router;