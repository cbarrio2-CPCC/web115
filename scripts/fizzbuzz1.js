const button = document.getElementById('fizzbuzzbutton');

button.addEventListener('click', () => {
    const fizzbuzzoutput = document.getElementById("fizzbuzzoutput");
    fizzbuzzoutput.innerHTML = "";
    for (let i = 1; i < 140 + 1; i++ ) {
        const fizzbuzz = i % 15 === 0 ? "Oven Paw" : i % 5 === 0 ? "Paw" : i % 3 === 0 ? "Oven" : "Chip";
        fizzbuzzoutput.innerHTML += `<li>${fizzbuzz}!</li>`;
    }
});