const totalCost = (products) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        const index = i;
        const element = products[index];
        total += element.price;
    }
    // for (const product of products) {
    //     total += product.price;
    // }
    return total;
  };

  const products =[
    { 
      name: "Dano Milk",
      price: 500 
    },
    { 
      name: "Taaza Tea",
     price: 200
    },
    { 
      name: 'Fresh Sugar',
     price:300
    } 
];
const total = totalCost(products);
console.log(total);
