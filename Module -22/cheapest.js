const Phone = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver', quantity: 5 },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver', quantity: 2 },
    { name: 'Iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver', quantity: 1 },
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver', quantity: 6 },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver', quantity: 8 },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver', quantity: 3 },
    { name: 'HTC', camera: 12, storage: '32gb', price: 64000, color: 'silver', quantity: 4 },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let index = 0; index < phones.length; index++) {
        let phone = phones[index];
        if (phone.price < cheapest.price) {
            cheapest = phone
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(Phone)
console.log(mySelection);