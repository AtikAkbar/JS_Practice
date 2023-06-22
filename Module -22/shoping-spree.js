const ShopingCurt = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver', quantity: 5 },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver', quantity: 2 },
    { name: 'Iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver', quantity: 1 },
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver', quantity: 6 },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver', quantity: 8 },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver', quantity: 3 },
    { name: 'HTC', camera: 12, storage: '32gb', price: 64000, color: 'silver', quantity: 4 }
];

console.log("Total price: ", Total(ShopingCurt));

function Total(list) {
    let total = 0;
    for (let index = 0; index < list.length; index++) {
        let itemTotal = (list[index].price * list[index].quantity);
        // console.log("itemtotal: ", itemTotal);
        total += itemTotal;
        // console.log(total);
    }
    return total;
}
// console.log( 64 + 44 + 20 + 52 + 82 + 22 + 36);