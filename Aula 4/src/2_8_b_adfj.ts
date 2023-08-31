function somaAritimetica_adfj(n: number, a1: number, r: number): number {
    let soma = 0;
    for (let i = 0; i < n; i++) {
        soma += a1 + i * r;
    }
    return soma;
}

const nn:number = 100000;
const a1n:number = 1;
const rn:number = 2;

console.log(somaAritimetica_adfj(nn, a1n, rn));