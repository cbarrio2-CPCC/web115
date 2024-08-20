window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML = `
        <h1>Clerick Barrion's Cool Bear | WEB115</h1>
        <nav>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="introduction.html">Introduction</a></li>
                <li><a href="contract.html">Contract</a></li>
            </ul>
        </nav>
    `;
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <ul>
            <li><a href="https://github.com/cbarrio2-CPCC">GitHub</a></li>
            <li><a href="https://cbarrio2-cpcc.github.io">GitHub.io</a></li>
            <li><a href="https://cbarrio2-cpcc.github.io/web115">WEB115.io</a></li>
            <li><a href="https://www.freecodecamp.org/clerick">freeCodeCamp</a></li>
            <li><a href="https://www.codecademy.com/profiles/cbarrion">Codecademy</a></li>
            <li><a href="https://jsfiddle.net/user/clerickbarrion">JSFiddle</a></li>
            <li><a href="https://www.linkedin.com/in/clerickbarrion">LinkedIn</a></li>
        </ul>
        <br>
        <p>Page built by CookieBear &copy;2024</p>
    `;
});