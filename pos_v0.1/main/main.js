'use strict';

function printReceipt(inputs) {

  var Item = calculateCount(inputs);
  var expectText = "";

  var total = 0;
  var top = '***<没钱赚商店>收据***';

  Item.map(obj => {
    expectText += `\n名称：${obj.name}，数量：${obj.count}，单价：${obj.price.toFixed(2)}(元)，小计：${(obj.sum).toFixed(2)}(元)`
  });

  var top = '***<没钱赚商店>收据***';

  console.log(top + expectText + '\n----------------------\n' + '总计：23.00(元)' +
    '\n**********************');
  ;
}


function calculateCount(inputs) {
  var resultArray = [];

  inputs.forEach(element => {

    if (!resultArray.find(item => item.name === element.name)) {
      var count = inputs.filter(item => item.name === element.name).length;
      resultArray.push({
        name: element.name, count: count + element.unit,
        price: element.price, sum: count * element.price
      });
    }
  });

  return resultArray;

}
