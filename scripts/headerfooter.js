window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = `
        <h1>Clerick Barrion's CookieBear</h1>
        <small><i>Bear Hugs in Every Bite</i></small>
        <nav>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="introduction.html">Introduction</a></li>
                <li><a href="contract.html">Contract</a></li>
                <li><a href="brand.html">Brand</a></li>
                <li><a href="fizzbuzz0.html">Fizz Buzz 0</a></li>
                <li><a href="fizzbuzz1.html">Fizz Buzz 1</a></li>
                <li><a href="fizzbuzz2.html">Fizz Buzz 2</a></li>
            </ul>
        </nav>
    `;
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <ul>
            <li><a href="https://github.com/cbarrio2-CPCC" target="_blank">GitHub</a></li>
            <li><a href="https://cbarrio2-cpcc.github.io" target="_blank">GitHub.io</a></li>
            <li><a href="https://cbarrio2-cpcc.github.io/web115" target="_blank">WEB115.io</a></li>
            <li><a href="https://www.freecodecamp.org/clerick" target="_blank">freeCodeCamp</a></li>
            <li><a href="https://www.codecademy.com/profiles/cbarrion" target="_blank">Codecademy</a></li>
            <li><a href="https://jsfiddle.net/u/clerickbarrion/fiddles/" target="_blank">JSFiddle</a></li>
            <li><a href="https://www.linkedin.com/in/clerickbarrion" target="_blank">LinkedIn</a></li>
        </ul>
        <br>
        <p>Page built by CookieBear &copy;2024</p>
    `;
});