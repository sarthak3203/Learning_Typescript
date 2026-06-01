//Functions Parameters and Arguments
function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai...`);
}       
 
makeChai("masala", 2); //here we are calling the function makeChai and passing the arguments as per the parameters defined in the function, and it will print the message in the console as per the arguments passed in the function call

makeChai("ginger","3"); //this is wrong as 3 should be a number and in this case it ia string


//Funtion Return Types
function getChaiPrice(): number { //this function should only return a number
    return 25;
}

function getChaiPrice2(): number {
    return "25"; //this is wrong as the function should return a number but here it is returning a string   
}



//OPTIONAL PARAMETERS
function makeChai2(type: string, cups?: number){ //here we have made the parameter cups optional by adding ? after it, so we can call the function without passing the cups argument
    if(cups){
        console.log(`Making ${cups} cups of ${type} chai...`);
    } else {
        console.log(`Making a cup of ${type} chai...`);
    }   
}

makeChai2("masala"); //here we are calling the function without passing the cups argument, and it will print the message in the console as per the type argument passed in the function call


//DEFAULT PARAMETERS
function makeChai3(type: string, cups: number = 1):void{ //here we have given a default value of 1 to the parameter cups, so if we call the function without passing the cups argument, it will take the default value of 1
    console.log(`Making ${cups} cups of ${type} chai...`);
} // void is return type of this functions means its not returning anything, it is just printing the message in the console

makeChai3("masala"); //here we are calling the function without passing the cups argument, and it will print the message in the console as per the type argument passed in the function call, and it will take the default value of 1 for cups