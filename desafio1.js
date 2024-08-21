let F = 30
let C = 30 

const tempF = C => {return (C*(9/5)+32)}
const tempC = function(){
    return (F-32)*9/5
}

console.log(tempC(F))
console.log(tempF(C))