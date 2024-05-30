const studentcart= new Map();
studentcart.set("maneesh",2);
studentcart.set("midhun",3);
studentcart.set("rahul",7);
studentcart.set("manu",8);
studentcart.set("ajay",9);
studentcart.set("sujin",12);

const price ={"maneesh":0.80,"midhun":0.5,"rahul":2.50,"manu":3.5,"ajay":4.5,"sujin":5.5};
let totalcost =0;

console.log("shoping cart:");
console.log("Item\t\tQuantity\tPrice\t\tTotal")

studentcart.forEach((quantity,item)=>{
    const itemPrice = price[item];
    const itemTotal = itemPrice * quantity;
    totalcost += itemTotal;  


    console.log(`${item}\t\t${quantity}\t\t${itemPrice}\t\t${itemTotal}`)
});

console.log("\ntotalcost= ",totalcost.toFixed(2));