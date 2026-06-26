// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

type chaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: chaiOrder) {
  console.log(order);
}

function serveChai(order: chaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasakaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = {ok:true} | {ok:false}

// class myRes implements Response{
//     ok:boolean=true
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type GingerChai = BaseChai & Extra;

const cup: GingerChai = {
  teaLeaves: 12,
  masala: 5,
};

type User = {
  UserName: string;
  bio?: string;
};

const u1: User = { UserName: "Himanshu" };
<<<<<<< HEAD
const u2: User = { UserName: "ASUS" , bio:"Asus.com" };
=======
const u2: User = { UserName: "ASUS", bio: "Asus.com" };

type Config = {
  readonly appname: string;
  version: number;
  readonly features: string;
};

const cfg: Config = {
  appname: "ASUS",
  version: 1.0,
  features: "Fast and Smart.",
};

// cfg.appname="MasterJi"
cfg.version = 1.1;
// cfg.features="Standard."
>>>>>>> part-1
