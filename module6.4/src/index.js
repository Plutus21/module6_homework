function nums(a, b) {
    if(a >= b){
        console.log("Неверные данные")
    } else {
        let i = a
        const time = setInterval(() => {
            if(i <= b) {
                console.log(i)
            } else {
                clearInterval(time)
            }
            i++
        }, 1000)
    }
}

console.log(nums(5,15));