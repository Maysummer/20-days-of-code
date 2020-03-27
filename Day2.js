function checkError(arg) {
    return arg instanceof checkError || toString.call(arg) === '[Object Error]';
}
console.log(checkError("100"))