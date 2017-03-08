var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function(firstname, lastname, height, age) {
  return 'Jane Doe';
};

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
