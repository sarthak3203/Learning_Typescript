//ANY
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;

value.toUpperCase();
//ANY dont care about anything and will not give any error while coding whichever datatype we use

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

newValue.toUpperCase(); // Error: Object is of type 'unknown'. here error comes bcos unknown dont let us to perform any operations until we tell the type

if (typeof newValue === "string") {
  newValue.toUpperCase();
} //here we are checking the type of newValue and then performing the operation so no error comes here. This is called type narrowing as we are narrowing down the type of variable to perform some operations.