// 1. 전역변수

// # 암묵적 전역변수(p.13)
//  javascript에서는 변수 선언 시 [var, let, const]로 선언하지 않을 경우
//  global object(일반적으로 window객체)의 property로 선언된다.
// ex1)
myGlobal = 'hello';
console.log(myGlobal);
console.log(window.myGlobal);
console.log(window['myGlobal']);
console.log(this.myGlobal);

// ex2)
result = 'result';
console.log(result); // 'result'
function sum(x, y) {
  result = x + y;
  return result;
}
console.log(sum(1, 2)); // 3
console.log(result); // 3

//  암묵적 전역변수는 위와 같은 문제를 발생 시킬 수 있다.
// => 해결책 : javascript에서 'use strict'를 사용
console.clear();

// # 전역객체에 대한 접근(p.16)
const global = (() => this)();
// 원본
// var global = (function () {
//   return this;
// })();
console.log(global);
console.clear();

// # 호이스팅(hoisting): 분산된 var 선언의 문제점(p.18)
//  javascript var 선언은 어떤 위치에서 선언되어도 해당 scope의 최상단으로 hoisting된다
myname = 'global';
function func() {
  console.log(myname); // undefined
  var myname = 'local';
  console.log(myname); // 'local'
}
func();
// 위 코드의 실행 순서
function func2() {
  var myname; // hoisting
  console.log(myname); // undefined
  myname = 'local';
  console.log(myname); // 'local'
}
// 위와 같은 코드는 유지보수를 어렵게 만든다.
// => 해결책 : 변수 선언은 let, const로 한다.
//  ### 도서에서는 var 변수를 최상단에서 선언하는 것으로 해결책을 제시하지만
//  ### 현재는 let, const로 변수를 선언하는 것으로 해결가능하다.
console.clear();
