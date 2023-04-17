function sum(a) {
    return (b) => {
        return (c) => {
            console.log(a + b + c);
        }
    }
}

let res = sum(1)(2)(3);
console.log(res)
