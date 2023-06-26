//Destructuing 

var x = {
  name1: "sethu",
  address: {
    place: "chennai",
  },
};

const {
  name1,
  address: { place },
} = x;
console.log(name1, place); //sethu, chennai

//when x is null while destructing it will throw an error so we need to change like before

var x1 = null;

const {
  name2,
  address: { place1 },
} = { ...x };
console.log(name2, place1); // undefined, undefined



// callbackhell
