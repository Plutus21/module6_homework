function example(a, b, callback) {
    return a + callback(b);
}

function f(b) {
    return b;
}

console.log(example(4,10, f))