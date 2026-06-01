
//declaring ARRAYS
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

const rating: Array<number> = [4.5, 5.0] //another way to declare array


//DECLARING ARRAY OF OBJECTS
type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
]


//READONLY ARRAYS- we can define them once, but then cannot change it later
const cities : readonly string[]= ["delhi","mumbai"];

cities.push("kolkata"); //this is wrong as we cannot change the readonly array after defining it once


//2D ARRAYS - array of arrays
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]   
]


//TUPLES
let chaiTuple: [string, number];

chaiTuple = ["Masala", 20]; //values should be given in the same order as defined in tuple, not like the below line
// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?];

userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];

const location: readonly [number, number] = [28.66, 32.22]; //now this tuple canot be changed after defining it once, as we have made it readonly

const chaiItems: [name: string, price: number] = ["Masala", 25];  //here we have given names to the elements of the tuple, so it will be more readable and we can understand what each element represents just by looking at the names given to them in the tuple, and it will not affect the way we assign values to the tuple, we can still assign values in the same order as defined in the tuple.



//ENUMS
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE   //enum values are in CAPS which is standard practice
}

const size = cupSize.MEDIUM; //here we can only use the values defined in the enum cupSize, and it will give us the index of the value we have used in the enum, so in this case it will give us 1 as MEDIUM is at index 1 in the enum cupSize