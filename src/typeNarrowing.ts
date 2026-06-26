function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making Chai ${kind} ... ->`;
  }
  return `Your Order id: ${kind}.`;
}

function ServeChai(msg?: string) {
  if (msg) {
    return `Serving Your ${msg}`;
  }
  return `Serving Default Masala Chai.`;
}

function OrderChai(size: "small" | "Medium" | "Large" | Number) {
  if (size === "small") {
    return `Small Chai.`;
  } else if (size === "Medium") {
    return `Medium Chai.`;
  } else if (size === "Large") {
    return "Large Chai.";
  } else {
    return `Order Number id: ${size}`;
  }
}

class KulhadChai {
  serve() {
    return `Serving Kulhad Chai .`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai .`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar `;
  }
  return `Serving custom chai : ${item}`;
}

console.log(getChai("Kulhad"));
console.log(getChai(45));
console.log(ServeChai("masala"));
console.log(ServeChai());
console.log(OrderChai("Large"));
console.log(OrderChai(32));

const myKulhad = new KulhadChai();
const myCutting = new CuttingChai();

console.log(serve(myKulhad));

console.log(myCutting);


const specialOrder: ChaiOrder = { type: "Elaichi", sugar: 2 };
console.log(serveOrder(specialOrder));

console.log(serveOrder("Adrak Chai"));
