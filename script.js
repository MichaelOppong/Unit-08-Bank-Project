var itemNames=[];
var itemPrices=[];
var price;
var name;
var TotalPrice;

$(".newItem").click(function(){
    
    TotalPrice=0;
    price=$(".itemPrice").val();
    name=$(".itemName").val();    
    $(".cart").append("<p>"+name+"</p><p class='priceBorder'>$"+price+"</p>");
    
    itemPrices.push(price);
    itemNames.push(name);
    itemPrices.forEach(function(total){
       TotalPrice=TotalPrice+parseInt(total);
       $(".number").text("Items in Cart: "+itemPrices.length);
             $(".total").text("Total: $"+TotalPrice);
    });
});
$(".purchase").click(function(){
    console.log(itemPrices[itemPrices.length]);
   alert("Your last depsoit amount was ");
 
});