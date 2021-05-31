const arr = [
	{name: 'product1', price:123},
	{name: 'product2', price:456},
	{name: 'product3', price:789},
	{name: 'product4', price:321},
	{name: 'product5', price:654},
];
arr.push({name: 'product6', price:987});
let y = arr.reduce(function countBasketPrice(co, pr) {
	return {count: co.count + 1, sum: co.sum + pr.price}
}, {count: 0, sum: 0});
let count = y.count
let summa = y.sum
if (count != 0) {
	document.write("Число товаров в корзине: " + count + ", сумма: " + summa)
} 
else {
	document.write("Корзина пуста")
}	
