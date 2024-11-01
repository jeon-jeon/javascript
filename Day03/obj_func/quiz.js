// const productName1 = prompt("구매물품");
// const productPrice1 = Number(prompt("가격"));
// const productName2 = prompt("구매물품");
// const productPrice2 = Number(prompt("가격"));
// const productName3 = prompt("구매물품");
// const productPrice3 = Number(prompt("가격"));

// const products = {
//   productList: [
//     { name: productName1, price: productPrice1 },
//     { name: productName2, price: productPrice2 },
//     { name: productName3, price: productPrice3 },
//   ],
//   totalPrice(productPrice1, productPrice2, productPrice3) {
//     return productPrice1 + productPrice2 + productPrice3;
//   },
// };

// console.log(products);

const cart = {
  purchasedItem: [],
  total_price: 0,
  getItem() {
    const item_name = prompt("구매물품");
    const item_price = Number(prompt("가격 입력"));
    this.purchasedItem.push(item_name);
    this.total_price = this.total_price + item_price;
  },
  showItem() {
    console.log(
      `총 구매 물품리스트:${this.purchasedItem} 총 금액:${this.total_price}`
    );
  },
};

cart.getItem();
cart.getItem();
cart.getItem();
cart.showItem();
