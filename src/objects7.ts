let tea : {
    name: string,
    price: number,
    isHot: boolean,
} //here we are defining the type of tea objects, and we can use it only once to create a tea object

tea = {
    name: "masala chai",
    price: 100,
    isHot: true    
} //here we are assigning the values in the tea object as per their types defined above



type tea2 = {
    name: string,
    price: number,
    isHot: boolean,
} //now this is a type alias, not an object type, and we can use this to create multiple objects


const tea3: tea2 = {
    name: "ginger chai",
    price: 80,
    isHot: true
} //see, here we declared a new variable tea3 and given it the type of tea2 there fore we can assign the same types of values in tea3 as we have defined in tea2, and we can use tea2 to create multiple objects like tea3, tea5 etc of same type only.


type User = {
    username:string;
    password:string;
}


const u : User = {
    username: "john_doe",
} //see here if we dont give each and eevry property mentioned in User type, then it will give error


const user2:User={
    username: "jane_doe",
    password: "password123", //see, no error here because we have given all the properties mentioned in User type
}


//PARTIALS
type User2 = {
    username:string;
    password:string;
}

const u2 : Partial<User2> = {
    username: "john_doe",
} 
//when we use partial means, we dont need to implement or write each and all properties mentioned in the type and no error will be shown


//REQUIREDS
type User3 = {
    username:string;
    password:string;
}
const u3 : Required<User3> = {
    username: "john_doe",
} 
//when we use required, then we need to implement or write each and all properties mentioned in the type and if we miss any property then it will give error
