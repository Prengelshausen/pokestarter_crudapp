var express = require('express');
const { getAllPokeStarters, getPokeStarterByID } = require('../model/pokestarter');
var router = express.Router();
const pokestarter = require("../model/pokestarter");

router.get('/pokestarter', function(req, res, next) {
  res.send(getAllPokeStarters());
});

router.get('/pokestarter/:id', function(req, res, next) {
  res.send(getPokeStarterByID(req.params.id));
});

module.exports = router;
