const mongoose = require('mongoose'),
Food = require('../models/food')

exports.findAll = function(req, res) {
  Food.find({}, function(err, results) {
    //return res.json(JSON.stringify(results))
    return res
      .status(200)
      .json(results);
  })
}

exports.findById = function(req, res) {
  var id = req.params.id;
  Food.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
}

exports.add = function(req, res) {
  Food.create(req.body, function (err, food) {
    if (err) return console.log(err);
    return res.send(food);
  });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
  console.log(req.body);

  Food.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log(JSON.stringify(numberAffected));
      return res.sendStatus(202);
  });
}

exports.delete = function(req, res) {
  var id = req.params.id;
  Food.remove({'_id':id},function(result) {
    return res.send(result);
  });
}
