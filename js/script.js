'use strict';

/*--------------------------- MINIMUM ---------------------------*/

//shopping list 

let shoppingList = [
  {
    productName: "Молоко",
    quantity: 2,
    isPurchased: false,
    pricePerUnit: 25,
    totalAmount: 0
  },
  {
    productName: "Хліб",
    quantity: 1,
    isPurchased: true,
    pricePerUnit: 15,
    totalAmount: 0
  },
  {
    productName: "Яйця",
    quantity: 12,
    isPurchased: false,
    pricePerUnit: 3,
    totalAmount: 0
  },
  {
    productName: "Сир",
    quantity: 1,
    isPurchased: true,
    pricePerUnit: 40,
    totalAmount: 0
  }
];

  // isPurchased false true 
  // for(let title of shoppingList){
  //   if(!title.isPurchased){
  //       alert(title.productName)
  //   }
  // }
  // for(let title of shoppingList){
  //   if(title.isPurchased){
  //       alert(title.productName)
  //   }
  // }
  

//isPurchased = true

function isPurchasedTrue(nameProduct){
  shoppingList.forEach(item =>{
    if(item.productName === nameProduct){
      item.isPurchased = true;
    }
  })
  console.log(shoppingList);
}

// isPurchasedTrue('Молоко')



/*--------------------------- MEDIUM ---------------------------*/

// delete product from list

function deleteProductList(id){
let deleteShoppingList = shoppingList.filter(item => item.productName !== id);

for(let title of deleteShoppingList){
      alert(title.productName)
}
}

// deleteProductList('Сир')


// add product to list

function addProductList(newPurchase){
  for(let title of shoppingList){
    if(title.productName === newPurchase.productName){
      title.quantity += newPurchase.quantity;
      return;
    }
  }
  newPurchase.totalAmount = newPurchase.quantity + newPurchase.pricePerUnit;
  shoppingList.push(newPurchase)
}

function quantityPrice(){
  for(let item of shoppingList){
    item.totalAmount = item.quantity * item.pricePerUnit
  }
}



let newPurchase = { productName: "Молоко", quantity: 1, isPurchased: false, pricePerUnit: 25 };
addProductList(newPurchase);

quantityPrice();

console.log(shoppingList);


/*--------------------------- MAXIMUM ---------------------------*/


// addition of all products

function addAllProducts(totalAmount){
  for(let item of shoppingList){
    totalAmount += item.totalAmount;
  }
  alert(totalAmount)
}
addAllProducts(0);

// addition of all false products

function addAllFalseProducts() {
  let totalFalseAmount = 0;
  shoppingList.forEach(item => {
      if (!item.isPurchased) {
          totalFalseAmount += item.totalAmount;
      }
  });
  alert(totalFalseAmount);
}

// addAllFalseProducts(); 


function addAllTrueProducts() {
  let totalTrueAmount = 0;
  shoppingList.forEach(item => {
      if (item.isPurchased) {
          totalTrueAmount += item.totalAmount;
      }
  });
  alert(totalTrueAmount);
}

// addAllTrueProducts(); 
