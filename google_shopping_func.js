//load products.json
var data = require("./products.json")

// PART ONE: getItems(array)
//      Create a function called getItems that simply returns the 
//      items array from the google product object.

var getItems = function() {
    return data.items;
}

// PART TWO: getItemsByBrand(array, brand)
//      Create a function called `getItemsByBrand` that takes an item 
//      array returns a new array of all items of a specified brand.
//      Test this function by searching for Sony, Cannon, Nikon and 
//      Panasonic.

var getItemsByBrand = function(itemData, brand) {
    var itemsByBrand = [];
    for (var i = 0; i < itemData.length; i++) {
        if (itemData[i].product.brand.toUpperCase() === brand.toUpperCase()) {
            //itemsByBrand.push(itemData[i].product);
            itemsByBrand.push(itemData[i]);
        };
    };
    return itemsByBrand;
};

// console.log(getItemsByBrand(getItems(), "Canon"));

// PART THREE: getItemsByAuthor(array, author)
//      Create a function called `getItemsByAuthor` that takes an item 
//      array and returns a new array of all items by a specified author.
//      Test this function by searching for Target, CDW, eBay

var getItemsByAuthor = function(itemData, author) {
    var itemsByAuthor = [];
    for (var i = 0; i < itemData.length; i++) {
        if (itemData[i].product.author.name.toUpperCase().indexOf(author.toUpperCase()) >= 0) {
            // itemsByAuthor.push(itemData[i].product);
            itemsByAuthor.push(itemData[i]);
        };
    };
    return itemsByAuthor;
};

// console.log(getItemsByAuthor(getItems(), "Target"));
// console.log(getItemsByAuthor(getItems(), "CDW"));
// console.log(getItemsByAuthor(getItems(), "eBay"));

// PART FOUR: getAvailableProducts(array)
//      Create function called `getAvailableProducts` that takes an item 
//      array and returns an array containing all of the available products 
//      (an available product is one with at least one availability of 
//      "inStock" in the inventories array)

var getAvailableProducts = function(itemData) {
    var itemsInStock = [];
    for (var i = 0; i < itemData.length; i++) {
        var inventoriesLength = itemData[i].product.inventories.length;
        for (var j = 0; j < inventoriesLength; j++)
            if (itemData[i].product.inventories[j].availability === "inStock") {
                // console.log(i + " " + itemData[i].product.googleId + ": " + itemData[i].product.inventories[j].availability);
                // itemsInStock.push(itemData[i].product);
                itemsInStock.push(itemData[i]);
            };
    };
    return itemsInStock;
};

// console.log(getAvailableProducts(getItems()));

// PART FIVE: Use your functions
//      Use the functions you created in 1 - 5 to print find the following 
//      lists of items.
//          * All items made by Nikon with the author eBay.
//          * All items made by Sony.
//          * All items made by Sony that are available.

console.log('-------------------------------------------------------------------------');
console.log('-------------------------------------------------------------------------');
console.log('All items made by Sony:');
    var itemsBySony = getItemsByBrand(getItems(), "Sony")
console.log(itemsBySony);
console.log('-------------------------------------------------------------------------');
console.log('-------------------------------------------------------------------------');
console.log('All items made by Sony that are available:');
console.log(getAvailableProducts(itemsBySony));
console.log('-------------------------------------------------------------------------');
console.log('-------------------------------------------------------------------------');
console.log('All items made by Nikon with the author eBay:');
    var itemsByNikon = getItemsByBrand(getItems(), "Nikon")
console.log(getItemsByAuthor(itemsByNikon, "eBay"));




// **BONUS:** Create another search function and/or think of other interesting ways to combine the functions to preform useful searches.