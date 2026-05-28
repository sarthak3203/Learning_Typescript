//UNION
let subs:string | number;
subs=1000; // valid
subs="1k"; // valid
subs=true; // Error: Type 'boolean' is not assignable to type 'string | number'.

let APIReqStatus: "success" | "failure" | "pending"; //we can give our own custom types using union
APIReqStatus = "success"; // valid
APIReqStatus = "failure"; //we get suggestions also.
APIReqStatus = "pending"; // valid
APIReqStatus = "error"; // Error: Type '"error"' is not assignable to type '"success" | "failure" | "pending"'.



//ANY
let randomValue: any;
let randomValue2;
//above both are any type.
randomValue2 = 10; // valid
randomValue = "hello"; // valid
randomValue2 = true; // valid


