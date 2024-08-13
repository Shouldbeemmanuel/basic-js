/**
  isEven(num)
  if num is even return true else return false
 */

let isEven = function (num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
};

console.log(isEven(7))