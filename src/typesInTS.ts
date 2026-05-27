//Type Inferencing
let drink = "chai"; //automatically inferred/assumed/understood as string
drink = 42; // Error: Type 'number' is not assignable to type 'string'.


//Type Annotations
let beverage : string = "coffee"; //we explicitly tell the compiler that beverage is of type string
beverage = "tea"; // valid
beverage = 100; // Error: Type 'number' is not assignable to type 'string'.


