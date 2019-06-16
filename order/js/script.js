var crustOne={name:"crispy",price:100}
var crustTwo={name:"stuffed",price:200}
var crustThree={name:"Glutten Free",price:50}

var Crust={
    name:"crusts",
    types:[crustOne,crustTwo,crustThree]
}



var topOne={ name:"Pepperoni",price:600,crust}
var topTwo={name:"Mushroom",price:500,crust}
var topThree={name:"Bacon",price:700,crust}
var topFour={name:"Extra Cheese",price:200,crust}
var topFive={name: "Pesto",price:600,crust}

var ConstantOne={
    name:"toppings",
    types:[topOne,topTwo,topThree,topFour,topFive,]
}

var sizeOne={name:"small",price:1000,ConstantOne}
var sizeTwo={name:"medium",price:1200,ConstantOne}
var sizeThree={name:"large",price:1500,ConstantOne}
  
var sizes=[sizeOne,sizeTwo,sizeThree]
 
/*sizes.forEach(function(size){
    alert(size.ConstantOne.crust)
})*/









function printChecked() {
    var items = document.getElementByName("size");
    var selectedmitems = "";
    for (i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems += items[i].value + "\n";
    }
    alert(selectedItems);
}
