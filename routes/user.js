const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

r.get('/:id', function(req , res){
    res.render('article' + req.params.id);
});

module.exports = r;
