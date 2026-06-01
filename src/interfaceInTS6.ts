type teaRecipe = {
    water:number,
    milk:number,
}

class masalaTea implements teaRecipe { //this class can easily implements teaRecipe
    water= 100;
    milk=50;
}


type cupSize = "small" | "large" //these custom types are called LITERAL TYPES

class chai implements cupSize { //it cant implement cupSize bcos in cupsize we have given our custom type as union of string literals and we cant implement that in class. thats where interface comes in.

}



//INTERFACE

interface cupSize2 {
    size: "small" | "large"    //we have to assign a variable
}

class chai2 implements cupSize2 {
    size: "small" | "large" = "small" //now this is correct and working as we have given the type small to the variable size which is of type small or large.
}

//also the class implementing an interface must have all the properties of that interface otherwise it will give error.


type TeaType = "masala" | "ginger" | "lemon"; //our custom types, TeaType must have any one tyoe from these 3 only, this is union of types

function orderChai(t: TeaType) {
    console.log(t); // here t can only be either masala or ginger or lemon
}

orderChai("masala");



//INTERSECTION OF TYPES

type BaseChai = {
    teaLeaves: number;
};

type Extra = {
    masala: number;
};

type MasalaChai = BaseChai & Extra; //here MasalaChai can have both, types of BaseChai and EXtra

const chai3: MasalaChai = {
    teaLeaves: 2,
    masala: 1
}; //see masala chai having both tealeaves and masala properties as it is intersection of both types.

console.log(chai3);


//OPTIONAL PROPERTIES

type User = {
    name:string,
    bio?: string, //here this bio property is optional

}

const user1:User = {
    name: "sarthak", //we didnt give bio property here but still no error comes as it is optional property in User type.
}

const user2:User = {
    name:"sarthak2",
    bio:"software developer" //here bio is also there
}



//READONLY VALUES

type Config = {
    readonly appName: string; //this is readonly property and once we set its value it can only be read and not changes again
    version: number;
};

const cfg: Config = {
    appName: "Masterji", //we set the value of this readonly properly once in starting
    version: 1
};

cfg.appName = "ChaiCode"; // Error: Cannot assign to 'appName' because it is a read-only property. //now we cant change the appName property value bcos its read only and we already set its value