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
$("#submit").click(function () {
    $("form").slideToggle();
    $(".all").hide();
});

$("#order").click(function () {
    $(".all").slideToggle();
    $("form").hide();
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
})

/*******************************Bussiness logic***************************** */
 function order(size,topping,crust){
    
     var items =document.getElementById("pop").value;
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
        results.innerHTML= price+=600
    }
    if (topping===Toppings[1]){
        results.innerHTML=price+=500
    } 
    if(topping===Toppings[2]){
        results.innerHTML=  price+=700
    }  
    if(topping===Toppings[3]){
        results.innerHTML= price+=200
    }
    if(topping===Toppings[4]){
        results.innerHTML= price+=600
    }
    if (crust===Crust[0]){
        results.innerHTML= price+=100
    }
    if(crust===crust[1]){
        results.innerHTML= price+=200
    }
    if (crust===Crust[2]){
        results.innerHTML= price+=50
    }

}
  






