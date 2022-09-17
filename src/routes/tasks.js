const router=require('express').Router();

router.get('/tasks', (req, res, next) => {
    res.send('API GET /');
});

module.exports = router;