// union

let subs: number | string = "1m";

let apiRequestStatus: "Pending" | "Success" | "Error " = "Pending";

apiRequestStatus = "Success";

let airLineSeat: "aisle" | "window " | "middle" = "aisle";

airLineSeat = "window ";

const orders = ["12", "20 ", " 32", "44"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "12") {
    currentOrder = order;
    break;
  }
  currentOrder = "32";
}
console.log(currentOrder);
