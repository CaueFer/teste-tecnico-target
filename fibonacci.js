function testFibonaci(num) {
    function fibonacciSequence(limit) {
        var sequence = [0, 1];
        var nextValue = 1;
        while (nextValue <= limit) {
            nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            if (nextValue <= limit) {
                sequence.push(nextValue);
            }
        }
        return sequence;
    }
    var fibonacciNumbers = fibonacciSequence(num);
    if (fibonacciNumbers.includes(num)) {
        return "O n\u00FAmero ".concat(num, " esta na sequ\u00EAncia de Fibonacci.");
    }
    else {
        return "O n\u00FAmero ".concat(num, " N\u00C3O esta na sequ\u00EAncia de Fibonacci.");
    }
}
// ESCOLHER O NUMERO DA SUA PREFERENCIA
var numero = 26;
console.log(testFibonaci(numero));
