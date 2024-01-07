
let myDate = new Date(2023,0,12);

console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getTime());


let date = new Date().toLocaleString("default",{
    weekday:"long"
})
console.log(date);
