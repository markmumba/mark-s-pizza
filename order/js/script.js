var top1={ name:"Pepperoni",price:600}
var top2={name:"Mushroom",price:500}
var top3={name:"Bacon",price:700}
var top4={name:"Extra Cheese",price:200}
var top5={name: "Pesto",price:600}












function printChecked() {
    var items = document.getElementByName("size");
    var selectedmitems = "";
    for (i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems += items[i].value + "\n";
    }
    alert(selectedItems);
}
