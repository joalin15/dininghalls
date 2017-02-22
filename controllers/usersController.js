const mongoose = require('mongoose'),
User = require('../models/user')

exports.findAll = function(req, res) {
  User.find({}, function(err, results) {
    //return res.json(JSON.stringify(results))
    return res
      .status(200)
      .json(results);
  })
}

exports.findById = function(req, res) {
  var id = req.params.id;
  User.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
}

exports.add = function(req, res) {
  User.create(req.body, function (err, user) {
    if (err) return console.log(err);
    return res.send(user);
  });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;
  console.log(req.body);

  User.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log(JSON.stringify(numberAffected));
      return res.sendStatus(202);
  });
}

exports.delete = function(req, res) {
  var id = req.params.id;
  User.remove({'_id':id},function(result) {
    return res.send(result);
  });
}
