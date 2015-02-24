pizzaIceCream.controller('PizzaCtrl', function PizzaCtrl($scope, PizzaFactory) {
  $scope.total = PizzaFactory.total;
  $scope.PizzaFactory = PizzaFactory;
});
