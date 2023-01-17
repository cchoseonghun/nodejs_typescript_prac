interface CraftBeer2 {
  beerName: string;
  nameBeer(beer: string): void;
  // test: string;
}

class myBeer2 implements CraftBeer2 {
  beerName: string = "Baby Guinness";
  nameBeer(b: string) {
    this.beerName = b;
  }
  constructor() {}
}