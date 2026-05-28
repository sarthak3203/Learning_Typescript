try {

} catch (error) {
  console.log(error.message); //bcos we dont know the type of error we are getting and maybe there is no message property in that error object so we get error here.
}

try {

} catch (error){
    if (error instanceof Error) {
        console.log(error.message); // here we are checking if the error is an instance of Error class then only we are trying to access the message property as there is a message property in Error.
}
console.log("error message", error)
}



//TYPE ASSERTION, we tell ts to believe us 

let value: unknown = "chai";
value.toUpperCase(); // Error //ts dont know value type here


let value2: unknown = "chai";

console.log((value2 as string).toUpperCase()); //here no error as we told ts that believe us value2 is of type  string and we can perform string operations on it. this is TYPE ASSERTION.


const data:unknown = "hello";

const str:string =data; //although there is string in data var but its still not getting assigned to a string variable str


const str2:string = data as string //here no error comes as we told ts data is string only and it is getting assigned to str2 which is a string variable.

