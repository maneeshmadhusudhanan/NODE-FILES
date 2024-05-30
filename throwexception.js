function checkage(age){
    if(age<18){
        throw new Error("you must be 18 or older.");
    }else{
        console.log("you are allowed")
    }
}

try{
    checkage(24);

}catch(error){
    console.log(" Error:"+error.message);
}finally{
    //executes always
    console.log("thanks for visiting");
}