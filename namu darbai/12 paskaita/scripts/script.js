

let biudzetas = prompt('Kiek galite skirti pinigų atostogoms?');
let klimatas = prompt('Koks klimatas jums patinka?');

if (biudzetas >= 4000 && klimatas == 'karšta') {
    console.log('Naujoji Zelandija');
} else if (biudzetas >= 4000 && klimatas == 'šalta') {
    console.log('Islandija');
} else if (biudzetas >= 1000) {
    console.log('Skandinavijos šalys');
} else {
    console.log('Bulgarija arba Serbija');
}

let kriptis = '';

if (biudzetas >= 4000 && klimatas == 'karšta') {
    kriptis = 'Naujoji Zelandija';
} else if (biudzetas >= 4000 && klimatas == 'šalta') {
    kriptis = 'Islandija';
} else if (biudzetas >= 1000) {
    kriptis = 'Skandinavijos šalys';
} else {
    kriptis = 'Bulgarija arba Serbija';
}

console.log('Mes Jums siūlome keliauti į ' + kriptis + '.');


