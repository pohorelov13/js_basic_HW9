const fields = ['name', 'age', 'email'];

const newUser = {}

console.log(newUser);

fields.forEach((f) => {
    newUser[f] = prompt(`Enter your ${f}:`);
});

for (const newUserKey in newUser) {
    console.log(`${newUserKey} -> ${newUser[newUserKey]}`);
}

console.log(newUser);