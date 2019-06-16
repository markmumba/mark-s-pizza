/*********************checkbox workability************* */
$(document).ready()
function validateWhichOne(){
    var checkboxes=document.getElementsByName("");
 var items=0;
  for (var i=0;i<checkboxes.length;i++)
  {
      if(checkboxes[i].checked)
      items++;
  }
if(items>1){
    alert ("you cannt select more than two in one pizza")
}
}
















/******************prices Workability****************** */
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










