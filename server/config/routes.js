var mealController = require('../meals/mealController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {
<<<<<<< HEAD
  //app.post('/api/users/signin', userController.signin);
  //app.post('/api/users/signup', userController.signup);
  //app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  app.get('/api/meals/', mealController.allMeals);
  app.post('/api/meals/', mealController.newMeal);
  //handle all other route treat as a get request for all meals
  app.get('api/*', mealController.allMeals);
=======
  //handle get and post request from client and pass them to controller
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);

  app.get('/api/meals', mealController.allMeals);
  app.post('/api/meals', mealController.newMeal);
  app.get('/api/*', mealController.allMeals);
>>>>>>> 007c30f93e336519d04b9b957094e28df0028f36

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

