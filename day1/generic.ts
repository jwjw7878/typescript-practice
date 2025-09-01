// 제네릭 함수 정의
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 숫자 배열에 적용
const nums = [1, 2, 3];
console.log(firstElement(nums)); // 1

// 문자열 배열에 적용
const strs = ["a", "b", "c"];
console.log(firstElement(strs)); // "a"
