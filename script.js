var shoppingList = [
  {
    name: 'kale',
    price: 2.79,
  },
 {
    name: 'eggs',
    price: 3.59,
  },
  {
    name: 'almond milk',
    price: 5.99,
  },
  {
    name: 'green onions',
    price: 2.00,
  },
  {
    name: 'oranges',
    price: 4.00,
  },
  {
    name: 'cheese',
    price: 7.00,
  },
  {
    name: 'wine',
    price: 12.99,
  },
  {
    name: 'toilet paper',
    price: 11.29,
  },
  {
    name: 'bodywash',
    price: 8.99,
  },
  {
    name: 'shampoo',
    price: 5.99,
  },
  {
    name: 'conditioner',
    price: 4.45,
  }
  ];

  var total = 0;
  shoppingList.forEach(function(i){
    total += i.price;
    console.log(i.name + " " + i.price);
  });
  console.log("Total: " + total);
  
