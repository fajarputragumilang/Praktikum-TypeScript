export{};
const nim : string = "053553532";
const batas : number = parseInt(nim.slice(-2)) + 10;

function cariPrima(angka : number) : boolean {
  if (angka < 2) return false;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }
  return true;
}

const daftarPrima : number[] = [];
for (let i = 1; i <= batas; i++) {
  if(cariPrima(i)) {
    daftarPrima.push(i);
  }
}

console.log(daftarPrima.join(","));