export interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Item extends BaseItem {
  id: number;
}

// BaseItem: 아이템을 수정, 등록할 때 사용
// Item: 특정한 값을 검색하거나 삭제할 때 사용