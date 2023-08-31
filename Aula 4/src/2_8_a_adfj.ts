function aritmetica_adfj(n: number, a1: number, r: number): number {
    if (n === 1) {
        return a1;
    } else {
        return a1 + aritmetica_adfj(n - 1, a1 + r, r);
    }
}

const n = 100000;
const a1 = 1;
const r = 2;

console.log(aritmetica_adfj(n, a1, r));