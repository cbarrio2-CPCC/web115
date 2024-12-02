const form = document.querySelector("form");

function checkDivision(firstDivisor, secondDivisor) {
    return firstDivisor % secondDivisor === 0;
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lname = document.getElementById("lname").value;
    const greeting = document.getElementById("greeting");
    const fizzbuzzoutput = document.getElementById("fizzbuzzoutput");

    const defaultWord = document.getElementById("default-word").value;
    const fizzWord = document.getElementById("fizz-word").value;
    const buzzWord = document.getElementById("buzz-word").value;
    const bangWord = document.getElementById("bang-word").value;

    const fizzNumber = Number(document.getElementById("fizz-number").value);
    const buzzNumber = Number(document.getElementById("buzz-number").value);
    const bangNumber = Number(document.getElementById("bang-number").value);
    const divisors = [[fizzNumber, fizzWord + " "], [buzzNumber, buzzWord + " "], [bangNumber, bangWord + " "]];

    const total = Number(document.getElementById("total").value);
    greeting.innerText = `Welcome to CookieBear, ${fname} ${middleInitial ? middleInitial+"." : ""} ${lname}!`;

    fizzbuzzoutput.innerHTML = "";
    for (let i = 1; i < total + 1; i++ ) {
        fizzbuzz = "";
        divisors.forEach((divisor) => {
            if (checkDivision(i, divisor[0])) {
                fizzbuzz += divisor[1];
            }
        });
        fizzbuzzoutput.innerHTML += !fizzbuzz ? `<li>${defaultWord}</li>` : `<li>${fizzbuzz}</li>`;
    }
});