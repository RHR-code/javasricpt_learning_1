

let map = new Map();
map.set("in" , "india")
map.set("bd" , "bangladesh")
map.set("aus" , "Australia")
// console.log(map)


for (const [key,value] of map) {
    // console.log(key, "-" ,value);
}


let obj = {
    js:"javascript",
    py:"python",
    cpp:"c++",
    rb:"rubi"
}

for (const key in obj) {
   
    // console.log(`${key} is short for ${obj[key]}`)
}

let arr2 = ["oppo","vivo","xiaomi","apple"]

// for (const key in arr2) {
//     console.log(arr2[key]);
// }

// arr2.forEach(function (val){
//     console.log(val)
// })

function func(arr2){
    console.log(arr2)
}

// arr2.forEach(func)



let arr3 = [
    {
        js:"javascript",
        ry:"ruby"
    },
    {
        cpp:"c++",
        py:"python"
    },
    {
        js:"javascript",
        ry:"ruby"
    }
]

arr3.forEach( (val) => {
    console.log(val.js)
})