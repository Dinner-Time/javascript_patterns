// 4. switch 구문규칙(p.25)
//  # 코드정렬
//  # 각 case문은 명확하게 break로 종료
//  # break를 생략하여 통과시키는 경우 반드시 기록남기기
//  # 반드시 default 정의
// ex1)
const condition = 0;
switch (condition) {
  case 0: {
    console.log('zero');
    break;
  }
  case 1: {
    console.log('one');
    break;
  }
  case 2: {
    console.log('two');
    break;
  }
  default: {
    console.log('unknown');
  }
}
console.clear();
