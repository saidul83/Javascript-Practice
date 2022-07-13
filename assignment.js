// ১. Variable কি ?

//Ans : Variable হলো এমন একটি জিনিস যার মাধ্যমে আমরা যে কোনো Valu রাখতে পারি, প্রয়োজনে পরিবর্তন , আপডেট করতে পারি ।

// ২. Variable কিভাবে লিখতে হয় ?

exm : var myName

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?

//Ans : সিঙ্গেল বা ডাবল কোটেশনের ভিতরে যা থাকবে তাই ই string .

Exm : var stringType = "Hello String";

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?

//Ans : ভ্যালো হিসেবে থাকা  কোনো পূর্ণসংখাই Number Variable

Exm : var numType = 1456;

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?

//Ans : যার রেজাল্ট সত্য বা মিথ্যা হয় তাই Boolian

Exm : var boolType = true;

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 

//Ans : toUpperCase হচ্ছে ছোট হাতের সব লেখাকে বড় হাতের লেখায় রূপান্তর করা
Exm :  var upperCase = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the';
 console.log(upperCase.toUpperCase())

//Ans : toLowerCase হচ্ছে ছোট হাতের সব লেখাকে বড় হাতের লেখায় রূপান্তর করা
Exm :  var lowerCase = 'IN PUBLISHING AND GRAPHIC DESIGN, LOREM IPSUM IS A PLACEHOLDER TEXT COMMONLY USED TO DEMONSTRATE THE';
  console.log(lowerCase.toLowerCase())

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?

//Ans : Javascvript এর মোট অপারেটর ৫ টি যেমন ঃ ----
//+, -, *, /, and 

// ৮. Math.abs() এর ব্যাবহার লিখুন । 

//Ans : Math.abs() এর কাজ হচ্ছে নেগেটিভ সংখ্যাকে পজিটিভ করা
Exm : var myNum = -20;
var pos = Math.abs(myNum)
console.log(pos)

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 

//Ans : Math.celi এর ব্যবহার হলো কোনো সংখ্যা অর্থাৎ ০.৫ বা এর উপরে হলে উপরে দিকে নিবে আর যদি ০.৫ এর কম হয় তাহলে নিচের দিকে যাবে 
Exm : var myNum = 0.5;
var pos = Math.ceil(myNum)
console.log(pos)

Exm : var myNum = 0.49;
var pos = Math.ceil(myNum)
console.log(pos)

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 

//Ans : Math.Floor এর ব্যবহার হলো কোনো সংখ্যা যতই বড় হোক না কেন সেটাকে নিচে বা কমিয়ে দিবে
Exm : var myNum = 0.19;
var pos = Math.floor(myNum)
console.log(pos)
Exm : var myNum = 0.99;
var pos = Math.floor(myNum)
console.log(pos)

// ১১. Math.round() এর ব্যাবহার লিখুন ।

//Ans : বেশি থাকলে বাড়িয়ে দিবে আর যদি সংখ্যা কম হয় তাহলে কমিয়ে দিবে
Exm : var myNum = 5.78;
var pos = Math.round(myNum)
console.log(pos)

// ১২. Math.random() এর ব্যাবহার লিখুন ।
//Ans : এটা অনেকটা লটারির মতো । এটি প্রতেক বার একেক রকম আউটপুট দেখায় । এর মান কারোই জানা থাকে না
Exm : var random = Math.random() * 100;
console.log(random)

// asignment.js - GitHub Link 
//https://github.com/saidul83/Javascript-Practice