const casual = require('casual');
const fs = require('fs');

// randCategoryList
const randCategoryList = (quantityOfCategory) => {
  if (quantityOfCategory <= 0) {
    return [];
  }

  const categoryList = [];

  // Loop and push category

  Array.from(new Array(quantityOfCategory)).forEach(() => {
    const category = {
      id: casual.uuid,
      name: casual.word,
      createAt: Date.now(),
      UpdatedAt: Date.now(),
    };
    categoryList.push(category);
  });

  return categoryList;
};

// randProductList
const randProductList = (categoryList, quantityOfProducts) => {
  if (quantityOfProducts <= 0) {
    return [];
  }

  const productList = [];

  // random data
  for (const category of categoryList) {
    Array.from(new Array(quantityOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: casual.uuid,
        name: casual.word,
        color: casual.rgb_hex,
        price: casual.double((from = 0), (to = 1000)),
        desc: casual.description,
        createAt: Date.now(),
        UpdatedAt: Date.now(),
      };

      productList.push(product);
    });
  }
  return productList;
};
// IFFE
(() => {
  // random data
  const categoryList = randCategoryList(4);

  const productList = randProductList(categoryList, 5);
  // prepare db object
  const db = {
    categories: categoryList,
    products: productList,
    profile: [],
  };

  // write db object to db.json
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Override Data successfully');
  });
})();
