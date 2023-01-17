interface CraftBeer {
  name: string;
  hop?: number;
}

function brewBeer(beer: CraftBeer) {
  console.log(beer.name); // Saporo
}

let myBeer = {
  name: "Saporo",
};

brewBeer(myBeer);