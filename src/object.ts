/**
 * {
 * name:string
 * price:number
 * isHot:boolean
 * }
 */
const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Lemon",
  price: 49,
  isHot: true,
};

type Tea = {
  name: string;
  Price: number;
  ingredients: string[];
  isOff: boolean;
};

const FeaturedChai: Tea = {
  name: "Ginger Chai",
  Price: 30,
  ingredients: ["ginger", "Tulsi", "Tea leaves"],
  isOff: true,
};

type Cup = { size: string };

let smallCup: Cup = {
  size: "120 ml",
};

let bigCup = {
  size: "520 ml",
  material: "steel",
};

console.log(smallCup === bigCup);

type Brew = {brewTime:number}
const coffee = {
    brewTime:3,
    beans:"Arabica"
}
const ChaiBrew:Brew = coffee