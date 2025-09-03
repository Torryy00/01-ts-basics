function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement<number>([1, 2, 3]);           // 1
const firstStr = getFirstElement<string>(["a", "b", "c"]);     // "a"
const firstBool = getFirstElement<boolean>([true, false, true]); // true
