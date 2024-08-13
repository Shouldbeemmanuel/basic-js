let users=[
    {name: "Emmanuel", age: 19, address: "Kathmandu"},
    {name: "Hari", age: 29, address: "Lalitput"},
    {name: "Krishna", age: 20, address: "Bhaktapur"}
];

/**
    required output 1:
    ["Emmanuel", "Hari", "Krishna"]

    required output 2: 
    [19, 29, 20]

    required output3:
    [
    "My name is Emmanuel i am 19.",
    "My name is Hari i am 29.",
    "My name is Krishna i am 20"
    ]
 */

let names = users.map((value,i) => {
    return value.name;
});

console.log(names);

let ages = users.map((value, i) => {
    return value.age
});

console.log(ages)

let intro = users.map((value, i) => {
    return `My name is ${value.name} i am ${value.age}.`
})

console.log(intro)