(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter) {
    
    $scope.getLunchMenu = function () {
      var menu = $scope.menu;
      
      if (_.isEmpty(menu)) {
        $scope.msg = 'Please enter data first';
        $scope.textColor = {'color' : 'red'};
      } else {        
        var menuArry = _.compact(menu.split(','));    
        if (menuArry.length <= 3) {
          $scope.msg = 'Enjoy!';
          $scope.textColor = {'color' : 'green'};
        } else if (menuArry.length >= 4) {
          $scope.msg = 'Too much!';
          $scope.textColor = {'color' : 'green'};
        }
      }
    };
  }
  })();
  