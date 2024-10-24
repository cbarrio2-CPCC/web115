const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    const fname = document.getElementById("fname").value;
    const middleInital = document.getElementById("middle-inital").value;
    const lname = document.getElementById("lname").value;
    const greeting = document.getElementById("greeting");
    const fizzbuzzoutput = document.getElementById("fizzbuzzoutput");

    e.preventDefault();
    greeting.innerText = `Welcome to CookieBear, ${fname} ${middleInital}. ${lname}!`;
    let num = Number(prompt(`How high do you want to count, ${fname}?`));

    while (isNaN(num) || num < 1 ) {
        num = Number(prompt(`Enter a number greater than 0`));
    }

    fizzbuzzoutput.innerHTML = "";
    for (let i = 1; i < num + 1; i++ ) {
        const evenOdd = i % 2 === 0 ? "even" : "odd";
        fizzbuzzoutput.innerHTML += `<li>Oven Paw - The number is ${evenOdd}</li>`;
    }
});