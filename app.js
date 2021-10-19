import { operatorKali, operatorBagi, operatorKurang, operatorTambah } from "./modul/operatorAritmatika.js";
import { luasLingkaran, kelilingLingkaran, luasSegitiga, kelilingSegitiga } from "./modul/everything.js";

const kali = operatorKali(12, 2);
const bagi = operatorBagi(6, 3);
const tambah = operatorTambah(12, 5);
const kurang = operatorKurang(100, 20);
const luasLingkaran1 = luasLingkaran(20);
const kelilingLingkaran1 = kelilingLingkaran(2);
const luasSegitiga1 = luasSegitiga(20, 10);
const kelilingSegitiga1 = kelilingSegitiga(20);
console.log(kali);
console.log(bagi);
console.log(tambah);
console.log(kurang);
console.log(luasLingkaran1);
console.log(kelilingLingkaran1)

console.log(luasSegitiga1)
console.log(kelilingSegitiga1)