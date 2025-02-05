function soma(){
    let result = 0;
    for(let i in arguments){
        result += arguments[i];
    }
    return result;
}

console.log(soma(7,5,3.2,0.8));