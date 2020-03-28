function match(a, b){
    var matches = [];
    for(let i = 0; i <= a.length - 1; i++){
        for(let j = 0; j <= b.length - 1; j++){
            if (a[i] === b[j]) matches.push(a[i])
        }
    }
    return matches
}
console.log(match(["b", "m", "n"], ["d", "n", "m"]))