(function () {
  'use strict';

  angular
    .module('beyondEercise01')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($timeout, $http, $mdDialog, $stateParams, $scope, $mdMedia, $mdSidenav,$mdToast,searchResults) {
    var vm = this;

    $scope.videoID=$stateParams.videoID;

    $scope.video=searchResults.findDetails($scope.videoID);
    console.log($scope.video);

    $scope.videoWidth="100%";

  }
})();
