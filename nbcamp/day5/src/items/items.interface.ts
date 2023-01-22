import { Item } from './item.interface';

export interface Items {
  [key: number]: Item;  // 인덱스 시그니쳐
}

