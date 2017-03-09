var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {
  $scope.name = 'John';
  $scope.formattedName = $filter('uppercase')($scope.name);
  $log.log($scope.name);
  $log.log($scope.formattedName);
});

