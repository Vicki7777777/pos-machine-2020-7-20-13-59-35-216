function printReceipt(barcodes) {
    
/*     console.log(`
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************`) */
var str = "";
if(barcodes)
{
  var quantityItem = GetQuantity(barcodes);
  var detailedItem = GetItemInfoByBarCode(quantityItem);
  str = PrintItems(quantityItem);
  return str;
  
}
else{
  str = "***<store earning no money>Receipt ***" +
  "Total: 0 (yuan)\n" +
  "**********************";
}
}

function GetQuantity(barcodes){
  let itemsWithCount = {}
  barcodes.forEach(barCode => {
    if (barCode in itemsWithCount) {
        itemsWithCount[barCode].quality++
    } else {
        itemsWithCount[barCode] = {quality: 1}
    }
})
return itemsWithCount;

}

function GetItemInfoByBarCode(quantityItem){
  let itemsInfo = {}
  mean.forEach(item => {
    if (item.barcode === quantityItem.barCode) {
      quantityItem[barCode].info = item;
    }
  })
  return itemsInfo;
}

function PrintItems(detailedItem){
  let resultStr = "\n***<store earning no money>Receipt ***\n";
  let total = CalculateTotalPrice(detailedItem);
  detailedItem.forEach(item =>{
      resultStr += "Name: " + item.name + ", Quantity: " + value + ", Unit price: " + item.price + " (yuan), Subtotal: " + (item.price * value) + " (yuan)\n";
  });
  resultStr += "----------------------\n";
  resultStr += "Total: " + total + " (yuan)\n";
  resultStr += "**********************";
  return resultStr;
}


function CalculateTotalPrice(detailedItem){
  let total = 0;
  detailedItem.forEach(item =>{
    total += item.price * value;
});
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
