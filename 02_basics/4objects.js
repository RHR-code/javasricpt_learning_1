


let obj = {
    email:"RHR@gmail.com",
    fullname:{
        UserFullname:{
            name:"ratul",
            age:20
        }
    }
}
// console.log(obj.fullname.UserFullname.name);



let obj1 = {
    1:"a",
    2:"b"
}
let obj2 = {
    3:"c",
    4:"d"
}

// let objTotal = {...obj1,...obj2}
// let objTotal = Object.assign({},obj1,obj2)

// console.log(objTotal);
// console.log(Object.values(obj1));
// console.log(Object.keys(obj1));
// console.log(obj1.hasOwnProperty("3"));


let course = {
    courseName : "JS course",
    courseInstructor: "RH Ratul",
    coursePrice: "1000"
}


let {courseName} = course

console.log(courseName);