const form = document.querySelector("form");
const firstDivisor = 3;
const secondDivisor = 5;
const thirdDivisor = 7;
const divisors = [[firstDivisor, "Oven "], [secondDivisor, "Paw "], [thirdDivisor, "Chocolate "]];
function checkDivision(firstDivisor, secondDivisor) {
    return firstDivisor % secondDivisor === 0;
}

form.addEventListener("submit", (e) => {
    const fname = document.getElementById("fname").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lname = document.getElementById("lname").value;
    const greeting = document.getElementById("greeting");
    const fizzbuzzoutput = document.getElementById("fizzbuzzoutput");

    e.preventDefault();
    greeting.innerText = `Welcome to CookieBear, ${fname} ${middleInitial ? middleInitial+"." : ""} ${lname}!`;
    let num = Number(prompt(`How high do you want to count, ${fname}?`));

    while (isNaN(num) || num < 1 ) {
        num = Number(prompt(`Enter a number greater than 0`));
    }

    fizzbuzzoutput.innerHTML = "";
    for (let i = 1; i < num + 1; i++ ) {
        fizzbuzz = "";
        divisors.forEach((divisor) => {
            if (checkDivision(i, divisor[0])) {
                fizzbuzz += divisor[1];
            }
        });
        fizzbuzzoutput.innerHTML += !fizzbuzz ? `<li>Chip</li>` : `<li>${fizzbuzz}</li>`;
    }
});