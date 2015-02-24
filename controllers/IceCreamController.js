pizzaIceCream.controller('IceCreamCtrl', function IceCreamCtrl($scope, IceCreamFactory) {
  $scope.total = IceCreamFactory.total;
  $scope.IceCreamFactory = IceCreamFactory;
});
