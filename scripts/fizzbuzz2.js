const button = document.getElementById('fizzbuzzbutton');
const firstDivisor = 3;
const secondDivisor = 5;

function checkDivision(firstDivisor, secondDivisor) {
    return firstDivisor % secondDivisor === 0;
}

button.addEventListener('click', () => {
    const fizzbuzzoutput = document.getElementById("fizzbuzzoutput");
    fizzbuzzoutput.innerHTML = "";
    for (let i = 1; i < 140 + 1; i++ ) {
        const fizzbuzz = checkDivision(i, firstDivisor * secondDivisor) ? "Oven Paw" : checkDivision(i, secondDivisor) ? "Paw" : checkDivision(i, firstDivisor) ? "Oven" : "Chip";
        fizzbuzzoutput.innerHTML += `<li>${fizzbuzz}</li>`;
    }
});