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
    db.tasks.findOne({ _id: (req.params.id) }, (err, task) => {
        if (err) return next(err);
        res.json(task);
    });
});

module.exports = router;