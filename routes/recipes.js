var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res) => {
    let { page, limit } = req.query;
    limit = limit || 3;
    page = page || 1;
    // console.log(page, limit, (page - 1) * 3);
    // console.log(pagenatedRes)
    return res.status(200).send(recipes.slice(((page - 1) * limit), limit * page));
});



module.exports = router;

