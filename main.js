let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let allString = mix.map(function (ele, ind, arr){
    return isNaN(ele) ? ele : ""; 
}).reduce(function (acc , cele){
    return `${acc}${cele}`
})
console.log(allString); // Elzero