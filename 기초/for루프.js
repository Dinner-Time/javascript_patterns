// 2. for 루프(p.19)

// # for 루프 최적화(p.19)
//  일반적인 for loop
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//  위와 같은 패턴은 loop 순회시마다 배열의 length에 접근한다.
//  만약 arr이 배열이 아닌 HTMLCollection인 경우,
//   length속성에 접근할 때 마다 DOM에 질의를 요청하는 것과 같으므로 코드성능이 떨어 질 수 있다.
// => 해결책 : 아래와 같이 length속성을 캐시하는 것으로 성능을 최적화 할 수 있다.
for (let i = 0, max = arr.length; i < max; i++) {
  console.log(arr[i]);
}
// (??) JSLint에서는 i++, i--와 같은 방법을 '과도한 기교'라는 이유로 권장하지 않는다고 한다.

// ** for문의 2가지 변형패턴(미세 최적화)
// 1) => 값을 비교할 때 0과 비교하는 것이 대개 더 빠르다
for (let i = arr.length; i--; ) {
  console.log(arr[i]);
}
// 2) => while문 활용
let i = arr.length;
while (i--) {
  console.log(arr[i]);
}
console.clear();
