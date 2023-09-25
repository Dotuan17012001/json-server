const faker = require('faker');

faker.locale = 'vi'

console.log(faker.commerce.department())
console.log(faker.commerce.productName())
console.log(faker.commerce.productDescription())

console.log(faker.datatype.uuid())
console.log(faker.image.imageUrl())
console.log(faker.name.findName())


