interface LabeledValue2 {
  label: string;
}

function printLabel2(labeledObj: LabeledValue2) {
  console.log(labeledObj.label);
}

let myObj2 = {size: 10, label: "Size 10 Object"};
printLabel2(myObj2);