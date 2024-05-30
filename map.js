let mapname= new Map();

mapname.set("name","john");
mapname.set("age",30);
mapname.set("city","delhi");

mapname.forEach((value,key)=>{
    console.log(key+'='+value)
});