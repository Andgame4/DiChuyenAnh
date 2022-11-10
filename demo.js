// var a;
// document.write(typeof a);
// a = 6;
// document.write(a);
// document.write("<br>");
// document.write(typeof a);
// document.write("<br>");

// document.write("Day là sô:" + b);
// document.write("<br>");
// document.write("Đây là C:" + C);
// var C = b;
// var b = 10;
// var b = 12;
// document.write(b);
// document.write("<br>");
// b = 100;
// document.write(b);
// document.write("<br>");
// const PI = true;
// document.write(PI);
// document.write("<br>");
// document.write(typeof PI);
// PI = 12;
// document.write(PI);
// document.write("<br>");
// var c = "hello world";
// document.write(c);
// document.write("<br>");

// var d = `hello world1
// hello world2`;
// document.write(d);
// document.write("<br>");

// let a = 10;
// let b = 3.14;
// document.write(typeof a);
// document.write("<br>");
// document.write(typeof b);
// document.write("<br>");
// let ab = a + b;
// document.write(typeof ab);
// document.write("<br>");
// document.write(ab);
// document.write("<br>");

// var a = 111 % 3;
// document.write(a);

// var x = 5;
// document.write(x++ + 5);
// Sơn: 15 - (x++ + 5)
// Vân,Đức:55 - (x+ ++5) Vân:nghĩ 2 cái là chuỗi
// Hoàng,Chuân,Hà:10 - (x++ + 5)
// Thu:5 - Thu:đoán thế
// Yến,Vượng:11 -(x + ++5) Vượng:anh nghĩ thế
// Hồng:12 - Hồng: tính theo anh Vượng nhưng cộng sai

// var x = 5;
// document.write(typeof x);
// document.write("<br>");
// document.write(typeof "5a");
// document.write("<br>");
// var y = x == 5;
// document.write(typeof y);
// document.write("<br>");
// document.write(y);
// document.write("<br>");
// var z = x == "5a";
// document.write(typeof z);
// document.write("<br>");
// document.write(z);
// x = x + 2
// x = 5 + 2
// x = x + ++2;
// x = 5 + ++2;

// let a = true;
// let b = false;
// let c = true;
// let d = false;

// let a = 15;
// let b = 5;
// let c = 10;
// let d = 20;

// let a = "Ha Noi";
// let b = 5;
// let c = false;
// let d = "Long";
// let long = {
//   name: "Pham Thanh Long",
//   age: 22,
// };
// document.write(a);
// document.write("<br>");
// document.write(b && c);
// document.write("<br>");
// document.write(typeof (b && c));
// document.write("<br>");
// document.write(c && a && b);
// document.write("<br>");
// document.write(typeof (c && a && b));
// document.write("<br>");
// // document.write(a || (b && c && d));
// document.write("<br>");
// document.write(
//   (c || (d && b && a)) && // Long
//     (a || (b && c && d)) // Ha Noi
// );

// document.write("<br>");
// document.write(!a);
// document.write("<br>");
// document.write(!5);
// document.write("<br>");
// document.write(!"");
// document.write("<br>");
// document.write(!0);
// document.write("<br>");
// document.write(!undefined);
// document.write("<br>");
// document.write(!NaN);
// document.write("<br>");
// document.write(!null);
// document.write("<br>");
// document.write(![]);
// document.write("<br>");
// document.write(!long);

// let a = "Ha Noi";
// let b = 5;
// let c = "5";
// document.write(a);
// document.write("<br>");
// document.write(b || c);
// document.write("<br>");
// document.write(a || b || c);

var x = 5;
var y = 10;
var z = ++x * y < 5 * 10 && 6 > 3;
// 6 * y < 5 * 10 && 6 > 3;
// 60 < 50 && 6 > 3;
// false && true;
// false;
document.write(z);
