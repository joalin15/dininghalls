//  Inserts document into 'food' collection with name: taco, rating: 5

var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:27017/dininghalls'

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('food')
  collection.insert({name: 'taco', rating: 5}, function(err, result) {
    collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
})
