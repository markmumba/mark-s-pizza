/*********************checkbox workability************* */
$(document).ready()
$("#submit").click(function () {
    $("#orderform").Toggle();
    $(".all").hide();
});

$("#order").click(function () {
    $(".all").Toggle();
    $("#orderform").hide();
});















/******************prices Workability****************** */
var crustOne={name:"crispy",price:100}
var crustTwo={name:"stuffed",price:200}
var crustThree={name:"Glutten Free",price:50}

var Crust={
    name:"crusts",
    types:[crustOne,crustTwo,crustThree]
}



var topOne={ name:"Pepperoni",price:600,Crust}
var topTwo={name:"Mushroom",price:500,Crust}
var topThree={name:"Bacon",price:700,Crust}
var topFour={name:"Extra Cheese",price:200,Crust}
var topFive={name: "Pesto",price:600,Crust}

var Toppings={
    name:"toppings",
    types:[topOne,topTwo,topThree,topFour,topFive,]
}

var sizeOne={name:"small",price:1000,Toppings}
var sizeTwo={name:"medium",price:1200,Toppings}
var sizeThree={name:"large",price:1500,Toppings}
  
var sizes=[sizeOne,sizeTwo,sizeThree]
 
/*sizes.forEach(function(size){
    alert(size.Toppings.crust)
})*/



/*******************************Bussiness logic***************************** */
 function order(size,topping,crust){
    
    // var sideA =parseInt(document.getElementById("sideA").value);
    sizes=["large","medium","small"];
    Toppings=["Pepperoni","Mushroom","Bacon","Extra Cheese","Pesto"];
    Crust=["Crispy","Stuffed","Glutten Free"];
    price =0;
    var results=document.querySelector("#final");

    if (size ===sizes[0]){
         results.innerHTML= price+=1500
    }
    if (size===sizes[1]){
      results.innerHTML= price+=1200
    }
    if (size===sizes[2]){
      results.innerHTML= price+=1000
    }
    if (topping===Toppings[0]){
        price+=600
    }
    if (topping===Toppings[1]){
     price+=500
    } 
    if(topping===Toppings[2]){
        price+=700
    }  
    if(topping===Toppings[3]){
        price+=200
    }
    if(topping===Toppings[4]){
        price+=600
    }
    if (crust===Crust[0]){
        price+=100
    }
    if(crust===crust[1]){
        price+=200
    }
    if (crust===Crust[2]){
        price+=50
    }

}
  






