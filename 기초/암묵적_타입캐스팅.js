// 5. 암묵적 타입캐스팅과 eval

// # 변수 비교(p.26)
//  == 연산자는 암묵적 타입캐스팅을 한다.
console.log(false == 0); // true
//  따라서 === 연산자를 사용하여 비교하는 것이 바람직하다.
console.log(false === 0); // false
console.log(false === (0 == 1)); // true

// # eval()은 사용하지 말 것(p.27)
//  eval()은 문자열을 자바스크립트 코드로 실행한다.
// ex1)
const obj = {
  key: 'value',
};
const property = 'key';
console.log(eval(`obj.${property}`));
//  eval()의 사용은 누군가 손댄 코드를 실행시킬 수 있기 때문에 보안 문제와 직결된다.

// # new Fuction()과 eval() (p.28)
//  new Functino()으로 평가되는 문자열 코드는 지역함수 scope로 실행되기 때문에 전역변수에 영향을 주지 않는다.
//  eval()의 실행을 함수 내에서 할 경우 new Function()과 같이 전역변수에 영향을 주지 않는다.
// ex1)
let jsstring = 'const un = 1; console.log(un);';
eval(jsstring);

jsstring = 'const deux = 2; console.log(deux);';
new Function(jsstring);

jsstring = 'const trois = 3; console.log(trois);';
(() => {
  eval(jsstring);
})();

console.log(typeof un); // number
console.log(typeof deux); // undefined
console.log(typeof trois); // undefined

// eval()은 실행되는 scope와 같은 scope에 있는 변수에 영향을 준다
// Function은 오직 평가되는 코드의 유효범위 안에서만 영향을 준다.
// ex2)
(() => {
  let local = 1;
  eval('console.log(typeof local);'); // number
})();

(() => {
  let local = 1;
  Function('console.log(typeof local)')(); // undefined
})();
// ### 반드시 문자열을 코드로 실행해야 하는 경우가 생긴다면 Function을 이용하도록 한다.
console.clear();
