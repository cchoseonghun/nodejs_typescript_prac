function warnUser(): void {
  console.log("This is my warning message");
}
// return을 하지 않음

let unusable: void = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만