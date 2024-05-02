//function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 2);

//arrow function
const arrowFunction = (num1: number, num2: number): number => num1 + num2;
arrowFunction(2, 2);

// object --> function --> method
const myUser = {
  name: "rakibul",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3];

const newArray: number[] = arr.map( (element: number): number => element * element);
