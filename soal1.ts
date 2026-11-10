export{};
const nim : string = "053553532";
const digitAkhir : number = parseInt(nim.slice(-1)); // 2
const tinggi : number = digitAkhir === 0 ? 10 : digitAkhir;

for (let i = 1; i <= tinggi; i++) {
    let baris = "";
    for (let j =  1; j <= i; j++) {
        baris += j + " ";
    }
    console.log(baris.trim());
}