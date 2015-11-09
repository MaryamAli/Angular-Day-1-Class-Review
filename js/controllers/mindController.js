let MindController = function ($scope) {

  $scope.count=0;
  $scope.message='likes';

  $scope.incrementByOne = function () {
    $scope.count++;

    $scope.message= ($scope.count === 1) ? 'like' : 'likes';
  };
};


MindController.$inject =['$scope'];

export default MindController;