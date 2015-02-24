pizzaIceCream.factory("FoodPricesFactory", function FoodPricesFactory(IceCreamFactory, PizzaFactory) {
  var factory = {};

  factory.totalCost = function() {
    factory.total = IceCreamFactory.total + PizzaFactory.total;
  }
  return factory;
});
