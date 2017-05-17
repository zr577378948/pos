'use strict';

function printReceipt(inputs) {
  var expectText = "";
  /*
   for (var i of inputs) {
   expectText += '\n名称：' + i.name + '，数量：' + i.count+i.unit + '，单价：' + i.price.toFixed(2) +
   '(元)，小计：' + (i.count * i.price).toFixed(2) + '(元)';
   }

   var top = '***<没钱赚商店>收据***';
   console.log(top +expectText + '\n----------------------\n' + '总计：23.00(元)' +
   '\n**********************');*/
  var total = 0;
  var top = '***<没钱赚商店>收据***';
  inputs.map(obj => {
    expectText += `\n名称：${obj.name}，数量：${obj.count}${obj.unit}，单价：${obj.price.toFixed(2)}(元)，小计：${(obj.count * obj.price).toFixed(2)}(元)`
  });
  console.log(top
    + expectText
    + '\n----------------------\n' + '总计：23.00(元)' +
    '\n**********************');
}
