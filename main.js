let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100, 1000]
	},
	{
		type: 'laptop',
		price: [50, 1500]
	},
	{
		type: 'smartphone',
		price: [80, 2000]
	},
	{
		type: 'tablet',
		price: [20, 1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
	this.category = category;
	this.type = type;
	this.price = price;
	this.render = function () {
		return `<tr>
		<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
		<td>${this.type}</td>
		<td>${typeof (this.price) === 'number' ? this.price : `${this.price[0]} - ${this.price[1]}`} USD</td>
	</tr>`
	}
}

let kitchenProducts1 = new Product('kitchen', 'grater', 10);
let kitchenProducts2 = new Product('kitchen', 'pastry-bag', 25);
let kitchenProducts3 = new Product('kitchen', 'scale', 5);
let kitchenProducts4 = new Product('kitchen', 'whisk', 15);

let devicesProducts1 = new Product('devices', 'desktop', [100, 1000]);
let devicesProducts2 = new Product('devices', 'laptop', [50, 1500]);
let devicesProducts3 = new Product('devices', 'smartphone', [80, 2000]);
let devicesProducts4 = new Product('devices', 'tablet', [20, 1300]);

let cosmeticsProducts1 = new Product('cosmetics', 'blush', 100);
let cosmeticsProducts2 = new Product('cosmetics', 'eyeshadow', 50);
let cosmeticsProducts3 = new Product('cosmetics', 'lipstick', 80);
let cosmeticsProducts4 = new Product('cosmetics', 'nail-polish', 200);
let cosmeticsProducts5 = new Product('cosmetics', 'perfume', 300);

let products = [kitchenProducts1, kitchenProducts2, kitchenProducts3, kitchenProducts4, devicesProducts1, devicesProducts2, devicesProducts3, devicesProducts4, cosmeticsProducts1, cosmeticsProducts2, cosmeticsProducts3, cosmeticsProducts4, cosmeticsProducts5];

let table = document.createElement('table');
let tbody = document.createElement('tbody');

let theader = `<tr>
<td>Image</td>
<td>Name</td>
<td>Price</td>
</tr>`
tbody.innerHTML += theader;

products.forEach(product => {
	tbody.innerHTML += product.render();
}
);

table.appendChild(tbody);
document.body.appendChild(table);

