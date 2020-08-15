const invoice = 101;
const stock = 100;

let message = 0;

if (stock >= invoice) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно товаров!";
}
console.log(message);
