//Type Narrowing
function getChai(kind: string|number){
    if(typeof kind === "string"){
        console.log(`I want to drink ${kind} chai.`) // we know this is a string as we checked and narrowed it down to string
    }
    console.log(`chai number ${kind} `) //we know this is number
}
// so this thing can help as giving better method suggestions as we can get string methods suggestions in the first console and number methods suggestions in the second console.

//this is also called type guarding as we are guarding the type of variable using some conditions.


//we can also create our own custom type as objects
type MasalaChai = {
  type: "masala";
  spicelevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

//and can use those custom types as types in union
type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai`;

    case "elaichi":
      return `elaichi chai`;

    case "ginger":
      return `ginger chai`;

    default:
      return "Unknown chai";
  }
}