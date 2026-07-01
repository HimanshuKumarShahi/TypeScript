function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Lemon chai", 4);

function getPrice(): number {
  return 29;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function Login(): void {
  console.log("Login Success ✅");
}

// function Register(type?:string){
//     console.log("Register successfully ");

// }
function Register(type: string = "Jhon Deo") {
  console.log("Register successfully ", type);
}

function testUser(order: {
  type: string;
  sugar: {
    quantity: string | number;
    size: "small" | "large" | "Powder";
  };
  size: "Small" | "Large";
  Price: {
    rupee: number | string;
    dollar: string | number;
  };
  id: {
    orderId: number | string;
    productId: {
      buyingDate: Date;
      ExpiryDate: Date;
      productReview: {
        name: string;
        description: string;
        star: {
          id: string | number;
          list: "1" | "2" | "3" | "4" | "5";
        };
      };
    };
  };
}) {
  return order;
}