function testFibonaci(num: number): string {

    function fibonacciSequence(limit: number): number[] {
      const sequence = [0, 1];
      let nextValue = 1;
  
      while (nextValue <= limit) {
        nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (nextValue <= limit) {
          sequence.push(nextValue);
        }
      }
  
      return sequence;
    }
  
    
    const fibonacciNumbers = fibonacciSequence(num);
  
    if (fibonacciNumbers.includes(num)) {
      return `O número ${num} esta na sequência de Fibonacci.`;
    } else {
      return `O número ${num} NÃO esta na sequência de Fibonacci.`;
    }
  }


  // ESCOLHER O NUMERO DA SUA PREFERENCIA
  const numero = 26;
  console.log(testFibonaci(numero));
  