function getPrimes(input) {
    let result = [];

    for(let i = 2; i < input; i++) {
        let counter = 0;
        
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                counter++;
            }
        }
        if(counter === 2) {
            // isPrime
            result.push(i);
        }
    }

    return result;
}

console.log(getPrimes(5));
console.log(getPrimes(10));