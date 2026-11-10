export{};
const nim : string = "053553532";
const duaDigit : number = parseInt(nim.slice(-2));//32
const selisih : number = parseInt(nim.charAt(nim.length -3)) + 1;// 6

const output : number[] = [];
for (let i = 0; i <= 9; i++) {
    output.push(duaDigit + i * selisih);
}
console.log(output.join(","));// 32 38