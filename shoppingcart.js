const shoppingcart= new Map();

shoppingcart.set("apple",2);
shoppingcart.set("banana",3);
shoppingcart.set("milk",1);






 const price ={"apple":0.80,"banana":0.5,"milk":2.50};
 let totalcost =0;

 console.log("shoping cart:");
 console.log("Item\t\tQuantity\tPrice\t\tTotal")

 shoppingcart.forEach((quantity,item)=>{
     const itemPrice = price[item];
     const itemTotal = itemPrice * quantity;
     totalcost += itemTotal;  


     console.log(`${item}\t\t${quantity}\t\t${itemPrice}\t\t${itemTotal}`)
 });

 console.log("\ntotalcost= ",totalcost.toFixed(2));