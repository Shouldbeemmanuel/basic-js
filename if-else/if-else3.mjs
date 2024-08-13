/*
age 
0 to 18 => underage
18 to 50 => adult
50 to 150 => Old
else => Not human
*/

let age= 20;

if (age < 18){
    console.log("You are underage.")
}

if (age >= 18 && age < 50){
    console.log("You an adult.")
}

else if (age >= 50 && age < 150){
    console.log("You are old.")
}

else{
    console.log("You are not alive")
}