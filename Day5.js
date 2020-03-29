function isPal(str) {
    var len = str.length;
    for (let i = 0; i < len; i++){
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPal("noporaropon"))