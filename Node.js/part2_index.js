// let age = 25;

// if (age >= 20) {
//     console.log("成人です");
// } else if (age >= 12 && age < 15) {
//     console.log("中学生です");
// }
// else {
//     console.log("未成年です");
// }


// switch (age) {
//     case 20:
//         console.log("成人です");
//         break;
//     case 12:
//         console.log("中学生です");
//         break;
//     default:
//         console.log(`${age}歳です`);
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }



let product = {
    name: "apple",
    price: 100,
    isActive: true
};

for (let key in product) {
    console.log(key);
}

