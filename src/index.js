// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// let val2 = "let変数";
// console.log(val2);

// val2 = "let上書き";
// console.log(val2);

//let val2 = "再宣言";

// const val3 = "const";
// console.log(val3);

//const val3 = "const2";
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "test",
//   age: 28,
// };
// console.log(val4);

// val4.name = "jaa";
// val4.address = "Hiroshima";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**テンプレート文字列
 *
 */

//  const name = "bob";
//  const age = 28;

//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
//  console.log(message1);

//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "daga",
//   age: 28,
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ['ddd', 26];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}です`
// console.log(message4);
