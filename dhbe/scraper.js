var express = require('express');
var app     = express();
var fs = require('fs');
var req = require('tinyreq');
var request = require('request')
var cheerio = require('cheerio');
var mongoose = require('mongoose')
const config = require('./config/config')

websiteURL = "http://hospitality.usc.edu/residential-dining-menus/";
dbURL = 'mongodb://localhost:27017/dininghalls'

request(websiteURL, function(error, response, html) {
  if (!error) {
    let $ = cheerio.load(html);

    $('ul[class="menu-item-list"] > li').each(function(i,e) {
      var foodName = $(this).contents().get(0).nodeValue;
      var foodRestriction = $(this).children().text();
      insertDocument(foodName, foodRestriction);
    });
  }
});

function insertDocument(foodName, foodRestriction) {
  mongoose.connect(config.database, function(err, db) {
    if (err) return
    var collection = db.collection('foods')
    collection.update(
      {name: foodName},
      {name: foodName,
        restriction: foodRestriction},
        {upsert: true}
      )
    db.close();
  })
  return;
}
