


// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(2,4)


// function clientisin(username){
//     if(!username){
//         return `please insert your name`
//     }
//     return `${username} just logged in `
// }

// console.log(clientisin())



// function clientisin(...username){
//    return username
// }

// console.log(clientisin(1, 4, 5 ,6 ,6, 6))

let obj = {
    name: "ratul",
    age:20,
    pro:"student"
}

function objfunction(newobj){
    return `name is ${newobj.name} and the age is ${newobj.age}`
}

console.log(objfunction(obj))

let myArr = [100,200,300,400]

function myfunc(...returnArr){
    return returnArr[1]
}

console.log(myfunc(myArr));