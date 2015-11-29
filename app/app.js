// Load angular
require('angular');

// Load services
var TodoApi = require('./services/todo-api-service');

// Load controllers
var ListController = require('./controllers/list-controller');

// Setup the app and attach components
var app = angular.module('AngularSeed', []);
app.service('todoApi', [TodoApi]);
app.controller('listCtrl', ['$scope', 'todoApi', ListController]);