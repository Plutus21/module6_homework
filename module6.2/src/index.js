function primeNumber(num) {
    let check = true;

    for(let i = 2; i < num; i++) {
        if(num % 2 === 0) {
            check = false;
        }
    }

    if(num < 1000) {
        return check;
    } else if(num > 1000) {
        return "Неверные данные"
    }
}

console.log(primeNumber(6));