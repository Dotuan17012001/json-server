const faker = require('faker');
const fs = require('fs');
faker.locale = 'vi'

console.log(faker.commerce.department())
console.log(faker.commerce.productName())
console.log(faker.commerce.productDescription())

console.log(faker.datatype.uuid())
console.log(faker.image.imageUrl())
console.log(faker.name.findName())

const randomCategoryList = (n) => {
    if(n<= 0) return [];
    const categoryList = []
    Array.from(new Array(n)).forEach(()=>{
        const category = {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            createAt: Date.now(),
            updateAt: Date.now()
        }
        categoryList.push(category)
    })
    return categoryList;
}

const randomProductList = (categoryList, numberOfProduct) => {
    if(numberOfProduct<= 0) return [];
    
    const productList = []
    for(const category of categoryList){
        Array.from(new Array(numberOfProduct)).forEach(()=>{
            const product = {
                categoryId:category.id,
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                createAt: Date.now(),
                updateAt: Date.now(),
                thumbnailUrl: faker.image.imageUrl(400, 400),
            };
               productList.push(product)
        })
    }
    return productList
}
const generation = ()=>{
    //random data
    const categoryList = randomCategoryList(4)
    const productList = randomProductList(categoryList, 5)
    //prepare db object
    const db = {
        categories: categoryList,
        product: productList,
        profile: {
            name: 'Do Van Tuan'
        }
    }
    //write db object to db.json
    fs.writeFile ("db.json", JSON.stringify(db), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );

}
generation()
