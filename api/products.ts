interface ProductsList {
    id: string,
    image: string,
    listPrice: string,
    name: string,
    price: string,
    quantity: number,
    typeOfMeasure: string
    measureUnit: number, 
    discountValue: number,
    brand: string
}

const products: ProductsList[] = [
    {
        "id": "1",
        "image": "https://i.imgur.com/9VgHMMp.jpg",
        "listPrice": "9.99",
        "name": "Tomate",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    },
    {
        "id": "2",
        "image": "https://i.imgur.com/v2Rsrhw.jpg",
        "listPrice": "9.99",
        "name": "Laranja",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    },
    {
        "id": "3",
        "image": "https://i.imgur.com/EViGYiS.jpg",
        "listPrice": "9.99",
        "name": "Banana",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    },
    {
        "id": "4",
        "image": "https://i.imgur.com/EkLIOEe.jpg",
        "listPrice": "9.99",
        "name": "Limão",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    },
    {
        "id": "5",
        "image": "https://i.imgur.com/Jp8MRN6.jpg",
        "listPrice": "9.99",
        "name": "Alface",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    },
    {
        "id": "6",
        "image": "https://i.imgur.com/9VgHMMp.jpg",
        "listPrice": "9.99",
        "name": "Tomate",
        "price": "8.99",
        "quantity": 1,
        "typeOfMeasure": "grams",
        "measureUnit": 100,
        "discountValue": 0.1,
        "brand": "Hortifruti"
    }
]

export default products;