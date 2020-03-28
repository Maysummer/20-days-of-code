// function checkError(arg) {
//     return arg instanceof checkError || toString.call(arg) === '[Object Error]';
// }
// console.log(checkError("100"))

isError = (input) => {
    if(input instanceof Error){
        return "error";
    }
    else{
        return "correct";
    }
}
console.log(isError(new Error("bjj")))