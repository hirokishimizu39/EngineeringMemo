console.log("Hello World");

let nickname = "John";
console.log(nickname);

nickname = "Jane";
console.log(nickname);

age = 21;
console.log(age);


// プリミティブ型と参照型

// プリミティブ型
// 数値、文字列、論理値、null、undefined

// 参照型
// オブジェクト、配列、関数


// プリミティブ型とオブジェクト型
// プリミティブ型は値が直接格納される
// オブジェクト型は参照が格納される


let fruit = "apple";

let ageOf = 20;

let isActive = true;

let color;

let box = null; // nullの型はobjectなのは驚き

console.log(typeof fruit);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof color);
console.log(typeof box);


let product = {
    name: "apple",
    price: 100,
    isActive: true
};

console.log(typeof product);


product.name = "banana";

console.log(product);


let fruits = ["apple", "banana", "orange"];


fruits[5] = "grape";
console.log(fruits[4]);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[10]);




let x = 10;

console.log(x > 5 && x < 20);

console.log(x > 5 || x < 20);

console.log(!(x > 5 && x < 20));


// trucy, faulcyな値について

undefined;
null;
0;
"";
NaN;
false;

console.log(true && "a");
console.log(false && "a");

console.log(true || "a");
console.log(false || "a");


