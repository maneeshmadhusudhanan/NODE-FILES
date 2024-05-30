function riskyOperation(){
    let obj;
    return obj.property //trying to return a property which does not exit
}

try{
    //code which might have error
    let result = riskyOperation();
    console.log(result)
}catch(error){
    //code to handle error
    console.log("an error occured:"+error.message);
}finally{
    //executes always
    console.log("this computer malfuntion it's in  trouble")
}