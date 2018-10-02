module.exports = function getZerosCount(number, base) {

    let pow = 0;
let division = checkDivision(base);

function checkDivision(base) {

    let j = 2;

    while (true) {
        if (base % j === 0) {
            base = base / j;
            pow++;

        } else {
            j++;
            pow = 0;
        }

        if (base === 1) return j;
    }
}

let b = 1;
let sum = 0;
for (let n = 1; b !== 0; n++) {
    b = Math.floor(number / Math.pow(division, n));
    sum += b;
}

return (Math.floor(sum / pow));
};