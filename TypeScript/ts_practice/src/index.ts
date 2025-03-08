let numA: number = 1;
let strA: string = "hello";
let boolA: boolean = true;
let arrA: number[] = [1, 3, 5];

console.log(numA, strA, boolA);

let arrB: Array<number> = [1, 3, 5];

console.log(arrB);

let arrC: Array<number> = [1, 3, 5];

console.log(arrC);

type User = { name: string; age: number; sayHello: () => void };

let user: User = {
  name: "John",
  age: 20,
  sayHello: () => {
    console.log("Hello");
  },
};

console.log(user);



cosnt remainString = (val: string): string => {
    return val
}


cosnt remainNumber = (val: number): number => {
    return val
}

const remainValue = <T>(val: T): T => {
    return val
}

remainValue<string>("hello");
remainValue<number>(1);
remainValue<boolean>(true);
