let mySym = Symbol("key1")

let obj = {
    name:"Ratul",
    "full name":"Robiul hasan",
    [mySym]: "key1",
    age: 20,
    islogged:false,
    lastLogged:["monday","tuesday"]
}

obj.greeting = function (){
    console.log("hello obj user");
}
obj.greeting2 = function (){
    console.log(`hello js user ${this.name}`);
}
console.log(obj.greeting());
console.log(obj.greeting2());

// obj.name= "hasan"
// Object.freeze(obj.age)
// obj.age= 20;
// obj.name= "rhr"
// console.log(obj.age);
// console.log(obj["full name"]);
// console.log(obj)