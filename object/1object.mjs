// object is the collection of data.
// let ar1 = ["ladygaga", "lalaland", "emman", 30, false];

let info = {
    singer: "ladygaga",
    movie: "lalaland",
    n_name: "emman",
    age: 30,
    isMarried: false,
};

console.log(info);
// getting specific value
console.log(info.singer);
console.log(info.movie);
//change specific value
info.age = 19
console.log(info)
// delete 
delete info.n_name
console.log(info)

info.sisters = ["santa" , "sarmila", "sushila", "bunu"]
console.log(info)