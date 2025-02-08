// // // オブジェクトの定義
// // const product = {
// //     name: "apple",
// //     price: 100,
// //     isActive: true,
// //     outPutProductInfo: () =>    {
// //         console.log(`${this.name}の値段は${this.price}円です。`);
// //     }
// // }





// // オブジェクトを大量生産する時に便利なのがconstructorを使う, class で定義する設計図
// class Product {
//     constructor(name, price, isActive) {
//         this.name = name;
//         this.price = price;
//         this.isActive = isActive;
//     }

//     outPutProductInfo() {
//         console.log(`${this.name}の値段は${this.price}円です。`);
//     }

//     static sayFuncConstructor() {
//         console.log("constructorが呼ばれました");
//     }
// }


// // 大量生産を実施するインスタンス化、石器ずからコンストラクトする
// const product1 = new Product("apple", 100, true);
// const product2 = new Product("banana", 200, false);
// const product3 = new Product("orange", 300, true);

// product1.outPutProductInfo();
// product2.outPutProductInfo();
// product3.outPutProductInfo();


// Product.sayFuncConstructor();


// console.log(Math.random());
// console.log(Math.floor(1.6))

// const message = new String("Hello")

// const message2 = "Hello"

// console.log(message.length);



const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

const date = new Date("2025-01-01 10:00:00");
console.log(date);

