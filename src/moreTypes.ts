let response: any = "74";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"Little boy"}';
// let bookObject = JSON.parse(bookString)
let bookObject = JSON.parse(bookString) as string;

console.log(bookObject);

const InputUserData = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "Chai";
value = ["1", "5", "9"];
value = 2.9;
value.toUpperCase();

let NewValue: unknown;

NewValue = "Chai";
NewValue = ["1", "5", "9"];
NewValue = 2.9;
if (typeof NewValue === "string") {
  NewValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "Chai Aur Code ";
const StrData: string = data as string;

type Role = "admin" | "user" | "SuperAdmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard. ");
    return;
  } else if (role === "user") {
    console.log("Redirecting to user dashboard.");
    return;
  }
  role;
}
