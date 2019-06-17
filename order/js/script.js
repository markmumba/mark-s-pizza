/*********************checkbox workability************* */
/*$(document).ready()

function validateWhichOne() {
    var checkboxes = document.getElementsByName("");
    var items = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            items++;
    }
    if (items > 1) {
        ("you cannt select more than two in one pizza")
    }
}
$("#submit").click(function () {
    $("form").slideToggle();
    $(".all").hide();
});

$("#order").click(function () {
    $(".all").slideToggle();
    $("form").hide();
});

/******************menu select****************** */
$(document).ready(function() {
    $("form#customized-pizza").submit(function(event) {
      event.preventDefault();
      var customSize = $("select#size").val();
      var customcrust = $("select#topping").val();
      var customtopping = $("select#crust").val();
      var newPizzaOrder = new Placeorder(customSize, customcrust, customtopping);
      newPizzaOrder.costOfPizza();
      totalOrderPrice.push(newPizzaOrder.price);
      $("#pizza-size").show();
      $("#pizza-crust").show();
      $("#pizza-topping").show();
      $("#pizza-size").append("\t" + "\t" + customSize);
      $("#pizza-crust").append("\t" + "\t" + customcrust);
      $("#pizza-topping").append("\t" + "\t" + customtopping);
      $("#final-cost").text("\t" + "\t" + newPizzaOrder.totalCost());
    });
    $("#checkout-btn").click(function() {
      location.reload();
    });
  });
  $(document).ready(function() {
    $("#delivery-btn").click(function() {
      $("#address-form").fadeIn();
    });
    $("#address-btn").click(function() {
      $("#address-form").slideUp();
      $("#alert-success").fadeIn();
    });
  });
  




/*pizzaSize.forEach(function(size){
    (size.pizzaToppings.pizzaCrust)
})

/*******************************Bussiness logic***************************** */
    var totalOrderPrice = [];

    function Order(size, topping, crust) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
        this.price = 0;

    };
    var pizzaSize = ["large", "medium", "small"];
    var pizzaToppings = ["Pepperoni", "Mushroom", "Bacon", "Extra Cheese", "Pesto"];
    var pizzaCrust = ["Crispy", "Stuffed", "Glutten Free"];

    Order.prototype.Placeorder = function () {

        if (this.size === pizzaSize[0]) {
            this.price += 1500;
        } else if (this.size === pizzaSize[1]) {
            this.price += 1200;
        } else if (this.size === pizzaSize[2]) {
            this.price += 1000;
        } else if (this.topping === pizzaToppings[0]) {
            this.price += 600;
        } else if (this.topping === pizzaToppings[1]) {
            this.price += 500;
        } else if (this.topping === pizzaToppings[2]) {
            this.price += 700;
        } else if (this.topping === pizzaToppings[3]) {
            this.price += 200;
        } else if (this.topping === pizzaToppings[4]) {
            this.price += 600;
        } else if (this.crust === pizzaCrust[0]) {
            this.price += 100;
        } else if (this.crust === pizzaCrust[1]) {
            this.price += 200;
        } else if (this.crust === pizzaCrust[2]) {
            this.price += 50;
        }
        return this.price
    };

    Order.prototype.Pizzacost = function () {
        var shoppingCartTotal = 0;
        for (var order = 0; order < totalOrderPrice.length; order++) {
            shoppingCartTotal += totalOrderPrice[order];
        }
        return shoppingCartTotal;
    };