// object는 원시 타입이 아닌 타입을 나타낸다. 
// ex) number, string, boolean, bigint, symbol, null, undefined가 아닌 나머지

// | => union 타입
function create(o: object | null): void {}

create({ prop: 0 }); // 성공
create(null); // 성공

// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류