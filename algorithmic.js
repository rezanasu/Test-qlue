function sumRecursive(target, currentSum, start, output, result) {
    if(currentSum === target) output.push(result.slice());

    for(let i = start; i < target; i++) {
        let tempSum = currentSum + i;
        if(tempSum <= target) {
            result.push(i);
            sumRecursive(target, tempSum, i, output, result);
            result.pop();
        } else {
            return;
        }
    }
}


function findAllSums(target) {
    let output = [];
    let result = [];
    console.log("n =", target)
    sumRecursive(target, 0, 1, output, result);
    return output;
}

console.log(findAllSums(4));