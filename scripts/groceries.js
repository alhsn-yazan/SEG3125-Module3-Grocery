	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		LactoseFree: true,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 1.99
	},
	{
		name: "Bread",
		LactoseFree: false,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 2.35
	},
	{
		name: "Organic Bread",
		LactoseFree: false,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: true,
		price: 3.35
	},
	{
		name: "Peanut butter",
		LactoseFree: true,
		NutFree: false,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 3.99
	},
	{
		name: "Milk",
		LactoseFree: false,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 4.39
	},
	{
		name: "Strawberries",
		LactoseFree: true,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 4.55
	},
	{
		name: "Organic Peanut butter",
		LactoseFree: true,
		NutFree: false,
		LactoseFreeORG: true,
		NutFreeORG: false,
		price: 4.99
	},
	{
		name: "Organic Strawberries",
		LactoseFree: true,
		NutFree: true,
		LactoseFreeORG: true,
		NutFreeORG: true,
		price: 5.99
	},
	{
		name: "Organic Milk",
		LactoseFree: false,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: true,
		price: 4.39
	},
	{
		name: "Salmon",
		LactoseFree: true,
		NutFree: true,
		LactoseFreeORG: false,
		NutFreeORG: false,
		price: 15.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].LactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].NutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFreeORG") && (prods[i].LactoseFreeORG == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFreeORG") && (prods[i].NutFreeORG == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
