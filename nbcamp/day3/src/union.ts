function printId(id: number | string) {
  // console.log(id.toUpperCase());

  // string | number' 형식에 'toUpperCase' 속성이 없습니다.
  // 'number' 형식에 'toUpperCase' 속성이 없습니다.

  // type narrowing 좁게 만든다. 타입을 좁혀주는
  if(typeof id === "string"){
    console.log(id.toUpperCase());
  }
}