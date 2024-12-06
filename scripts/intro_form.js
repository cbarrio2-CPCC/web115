const form = document.querySelector("form");

const addCourse = document.getElementById("add-course");
const courseContainer = document.getElementById("course-container");

Array.from(courseContainer.children).forEach((course) => {
    const button = course.querySelector("button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        course.remove();
    });
});

addCourse.addEventListener("click", (e) => {
    e.preventDefault();
    const id = Number(new Date().getTime());
    const li = document.createElement("li");
    li.innerHTML = `
        <input id="course${id}" class="course" type="text" placeholder="Course Name" required>
        <label for="reason${id}">Reason:</label>
        <input type="text" id="reason${id}" class="reason" placeholder="Reason" required>
        <button onclick={this.parentElement.remove()}>Remove</button>
    `;
    courseContainer.appendChild(li);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const photo = document.getElementById("photo").files[0];
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personal").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const subject = document.getElementById("subject").value;
    const platform = document.getElementById("platform").value;
    const funny = document.getElementById("funny").value;

    let strong = "";
    let courses = "";
    if (courseContainer.children.length > 0) {
        strong = "<strong>Courses I'm Taking &amp; Why:</strong>";
        Array.from(courseContainer.children).forEach((course) => {
            const courseName = course.querySelector(".course").value;
            const reason = course.querySelector(".reason").value;
            courses += `
                <li>
                    <strong>${courseName}: </strong>${reason}
                </li>
            `;
        });
    }
    const output = document.getElementById("output");
    
    output.innerHTML = `
        <h2>${fname} ${lname}'s Introduction</h2>
        <figure>
            <img src="images/anonymous.png" alt="Optional image">
            <figcaption>${caption}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background: </strong>${personal}</li>
            <li><strong>Professional Background: </strong>${professional}</li>
            <li><strong>Academic Background: </strong>${academic}</li>
            <li><strong>Background in this Subject: </strong>${subject}</li>
            <li><strong>Primary Computer Platform: </strong>${platform}</li>
            ${strong ? `<li>${strong}<ol>${courses}</ol></li>` : ""}
            <li><strong>Funny/Interesting Item to Remember me by: </strong>${funny}</li>
        </ul>
    `;
    const img = output.querySelector("img");
    img.src = URL.createObjectURL(photo);
});