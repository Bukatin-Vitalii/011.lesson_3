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

let products = [];

kitchenProducts.forEach(product => {
	products.push(new Product('kitchen', product.type, product.price));
});

devicesProducts.forEach(product => {
	products.push(new Product('devices', product.type, product.price));
});

cosmeticsProducts.forEach(product => {
	products.push(new Product('cosmetics', product.type, product.price));
});


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

