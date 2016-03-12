'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/boyband/', {templateUrl: 'partials/boyband.html', controller: 'boyCtrl'});
  $routeProvider.when('/girlband/', {templateUrl: 'partials/girlband.html', controller: 'boyCtrl'});
  $routeProvider.when('/Justin Bieber/', {templateUrl: 'partials/justinBieber.html', controller: 'boyCtrl'});
  $routeProvider.when('/One direction/', {templateUrl: 'partials/oneDirection.html', controller: 'boyCtrl'});
  $routeProvider.when('/Westlife/', {templateUrl: 'partials/westLife.html', controller: 'boyCtrl'});

  
  $routeProvider.otherwise({redirectTo: '/boyband'});
}]);
