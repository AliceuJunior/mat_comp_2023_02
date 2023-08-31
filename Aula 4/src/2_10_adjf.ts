class Fibonnaci{
    calcular(n: number): number {
        if (n === 1 || n === 2) {
          return 1;
        } else {
          return this.calcular(n - 1) + this.calcular(n - 2);
        }
      }
}
const fib = new Fibonnaci();

console.log(`Termo 5 da sequência de Fibonacci: ${fib.calcular(5)}`)

console.log(`Termo 10 da sequência de Fibonacci: ${fib.calcular(10)}`)
