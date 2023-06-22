const names = ['abul', 'babul', 'kabul', 'abul', 'kabul', 'kabul', 'bulbul', 'babul'];
console.log("name list: ",names);
removeDuplicates(names);

function removeDuplicates(names) {
    unique = [];

    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        if (!unique.includes(element)) {
            unique.push(element);
        }
    }
    console.log("unique: ",unique);
}