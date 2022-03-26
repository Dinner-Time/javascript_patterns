// 3. for-in과 prototype

// # for-in(== 열거(enumeration) )(p.22)
//  ### 해당 구문은 Object를 순회할 때만 사용해야한다.
//  ### Array또한 Object기 때문에 사용은 가능하지만 논리적 오류가 발생할 수 있다.
//  prototype을 따라 상속되는 property를 걸러내기 위한 hasOwnProperty()
// ex1)
// 객체 선언
const man = {
  hands: 2,
  legs: 2,
  heads: 1,
};
// 객체의 prototype에 clone property추가
if (typeof Object.prototype.clone === 'undefined') {
  Object.prototype.clone = () => 'clone';
}
// 1. prototype property인 clone이 출력
for (const key in man) {
  console.log(`${key} : ${man[key]}`);
}
// 2. hasOwnProperty() 사용
for (const key in man) {
  if (man.hasOwnProperty(key)) console.log(`${key} : ${man[key]}`);
}

for (const key in man) {
  if (Object.prototype.hasOwnProperty.call(man, key)) console.log(`${key} : ${man[key]}`);
}

const hasOwn = Object.prototype.hasOwnProperty;
for (const key in man) {
  if (hasOwn.call(man, key)) console.log(`${key} : ${man[key]}`);
}
//  hasOwnProperty()를 사용하지 않는 것이 오류를 발생시키지는 않는다.
//  오히려 사용하지 않는 것이 성능상 이점을 가져온다.
//  하지만 코드의 안전성을 위한다면 확인을 추가하는 것이 좋다.
console.clear();

// # prototype 확장에 관하여(p.24)
//  prototype을 확장하는 일은 기능을 추가하는 좋은 방법이나
//  코드가 예측을 벗어나는 일이 많아지기 때문에 확장하지 않는 것이 최선이다.
//  만약 prototype을 확장하는 경우 명확하게 문서화 하고 팀 내에서 공유한다.
console.clear();
