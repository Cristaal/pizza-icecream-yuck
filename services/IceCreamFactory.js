pizzaIceCream.factory("IceCreamFactory", function IceCreamFactory() {
  var factory = {};
  factory.prices = []

  factory.totalCost = function(price) {
    var price = { product: factory.iceCreamPrice };
    factory.prices.push(price)
  };
  return factory;
});
