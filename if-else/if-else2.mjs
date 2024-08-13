/*
gender is "male"   => "He is male"   => if()
gender  is "female" > "She is female" => else if()
gender is "other" => "other" => else if()
gender is other than male, female, other => "none"  => else
*/

let gender = "a"

if(gender === "male"){
    console.log(`he is $(male)`)
}

else if(gender === "female"){
    console.log(`he is $(female)`)
}

else if(gender === "others"){
    console.log("others")
}

else{
    console.log("none")
}