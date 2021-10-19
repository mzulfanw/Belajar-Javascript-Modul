export function luasLingkaran(jari) {
    return Math.floor(Math.PI * jari * jari);
}

export function kelilingLingkaran(jari) {
    return Math.floor(2 * Math.PI * jari);
}


// Segitiga
export function luasSegitiga(alas, tinggi) {
    return .5 * alas * tinggi;
}

export function kelilingSegitiga(s) {
    return s + s + s;
}