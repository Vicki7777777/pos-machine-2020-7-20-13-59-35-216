function printReceipt(barcodes) {
    
/*      console.log(`
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************`)  */


/* var barcodes = ([
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
])
printReceipt(barcodes); */

var str = "";
 if(barcodes)
 {
  var quantityItem = getQuantity(barcodes);
  var detailedItem = getItemInfoByBarCode(quantityItem);
  str = PrintItems(quantityItem);
  return str;
  //console.log(detailedItem);
}
else{
  str = "***<store earning no money>Receipt ***" +
  "Total: 0 (yuan)\n" +
  "**********************";
}
}

function getQuantity(barcodes){
  let itemsWithCount = {}
  barcodes.forEach(barCode => {
    if (barCode in itemsWithCount) {
        itemsWithCount[barCode].quality++
    } else {
        itemsWithCount[barCode] = {info: {},quality: 1}
    }
})
return itemsWithCount;

}

//TODO:Switch across the way
 function getItemInfoByBarCode(quantityItem){
  let itemsInfo = {}
  Object.keys(quantityItem).forEach(item => {
    if (item.barcode === mean.barCode) {
      itemsInfo[barCode] = {name:mean[barCode].name}
      quantityItem[barCode].info = item;
    }
  })
  return itemsInfo;
}

 function printItems(detailedItem){
  let resultStr = "\n***<store earning no money>Receipt ***\n";
  let total = calculateTotalPrice(detailedItem);
  detailedItem.forEach(item =>{
      resultStr += "Name: " + item.name + ", Quantity: " + value + ", Unit price: " + item.price + " (yuan), Subtotal: " + (item.price * value) + " (yuan)\n";
  });
  resultStr += "----------------------\n";
  resultStr += "Total: " + total + " (yuan)\n";
  resultStr += "**********************";
  return resultStr;
}


function calculateTotalPrice(detailedItem){
  let total = 0;
  detailedItem.forEach(item =>{
    total += item.price * value;
});
}

//TODO:Add a function to calculate the total price of sub items
function calculateSubtotal(detailedItem){
  
}

var mean = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ];

module.exports = {
    printReceipt
};
 
