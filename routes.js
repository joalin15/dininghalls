const express = require('express');
const foodsController = require('./controllers/foodsController');
const indexController = require('./controllers/indexController');
const usersController = require('./controllers/usersController')

module.exports = function(app) {
  /*const apiRoutes = express.Router();

  apiRoutes.get('/foods', foodsController.getAll);


  FOR FUTURE REFERENCE
  const foodsRoutes = express.Router();
  apiRoutes.use('/foods', foodsRoutes);
  foodsRoutes.post('/create-new-food', foodsController.createFood);
  */

  /* INDEX */
  app.get('/', indexController.get);

  /* USERS */
   app.get('/users', usersController.findAll)
   app.get('/users/:id', usersController.findById)
   app.post('/users', usersController.add)
   app.put('/users/:id', usersController.update)
   app.delete('/users/:id', usersController.delete)

  /* FOODS */
   app.get('/foods', foodsController.findAll)
   app.get('/foods/:id', foodsController.findById)
   app.post('/foods', foodsController.add)
   app.put('/foods/:id', foodsController.update)
   app.delete('/foods/:id', foodsController.delete)
}
