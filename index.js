//function 函數
// function hello() {
//   console.log("hello");
//   return 5;
// }

// let abc = hello();
// console.log(abc);

//return 1 回傳值
// function add(n1, n2) {
//   let result = n1 + n2;
//   //   console.log(result);
//   return result;
// }

// let test = add(3, 4);
// console.log(test);

//return 2 回傳值
// function con(oc) {
//   return oc * 1.8 + 32;
// }

// let of = con(0);
// console.log(of);

//array 陣列
// let arr = [70, 80, 90, 100];
// arr.push(110);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

//object 物件
// let man = new Object();
// man.x = 3;
// man.y = "hello";
// man.abc = function () {
//   console.log("money");
// };

// console.log(man);
// console.log(man.x > 1);
// man.abc();

//使用JSON 簡單法
// let man = {
//   name: "Lius",
//   age: 25,
//   gender: "girl",
//   aer: function () {
//     console.log(
//       "Hello my name is",
//       this.name,
//       "My gender is",
//       this.gender,
//       "and my age is",
//       this.age
//     );
//   },
// };

// console.log(man.name);
// man.aer();
// console.log(typeof man);

//while 迴圈
// let a = 0;
// while (a <= 6) {
//   console.log(a);
//   a++;
// }

// let n = 1;
// let result = 0;
// while (n <= 3) {
//   result = result + n;
//   n++;
// }
// console.log(result);

//for 迴圈
// for (let b = -5; b <= 10; b++) {
//   console.log(b);
// }

// let zxc = 0;
// for (let a = 0; a <= 20; a += 5) {
//   zxc = zxc + a;
// }
// console.log(zxc);

// for (let n = 1; n <= 100; n++) {
//   zxc = zxc + n;
// }
// console.log(zxc);

//break, continue 迴圈指令
// for (let n = 0; n < 3; n++) {
//   if (n == 1) {
//     continue;
//   }
//   console.log(n);
// }

//if 判斷式
// if (false) {
//   console.log(18);
// }

//兒童餐 0-12 $99, 學生餐 13-18 $149, 成人餐 19-64 $199, 老人餐 65~ $49,
// let age = prompt("請輸入年齡，會出現相對應的餐點");

// if (age < 0) {
//   alert("請輸入大於0歲的年齡");
// } else if (age <= 12) {
//   alert("您的年齡為兒童。您的餐點價錢為99元");
// } else if (age <= 18) {
//   alert("您的年齡為學生。您的餐點價錢為149元");
// } else if (age <= 64) {
//   alert("您的年齡為成人。您的餐點價錢為199元");
// } else if (age <= 150) {
//   alert("您的年齡為老人。您的餐點價錢為49元");
// } else {
//   alert("請輸入小於150歲的年齡");
// }

//km,

// let km = function (ball) {
//   return ball / 1.6;
// };

// let mph = km(150);
// console.log(mph);

// let name1 = ["jason", "tony"];
// name1.push("terry");
// name1.unshift("jerry");

// console.log(name1[3], name1[1]);

// let he = {
//   name: "Terry",
//   age: 32,
//   hobby: "play many car games",
//   birth: "87.04.14",
//   abc: function () {
//     console.log("我的年齡為", this.age);
//   },
// };
// he.abc();

//number game
//終極密碼
let ans = Math.floor(Math.random() * 100);

let n1 = 0;
let n2 = 99;

while (true) {
  let guess = prompt("終極密碼:(在" + n1 + "到" + n2 + "之間)");

  if (guess == ans) {
    alert("沒錯!答案就是" + ans);
    alert("太厲害啦~");
    break;
  } else if (guess <= ans) {
    n1 = guess;
  } else if (guess > ans) {
    n2 = guess;
  }
}
