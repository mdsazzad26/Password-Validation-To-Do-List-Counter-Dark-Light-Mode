
// =========================
// SELECT ELEMENTS
// =========================

const themeBtn = document.querySelector("#themeBtn");
const themeBtn2 = document.querySelector("#themeBtn2");

const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");

const countDisplay = document.querySelector("#count");
const counterMessage = document.querySelector("#counterMessage");

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

const passwordInput = document.querySelector("#password");

const lengthRule = document.querySelector("#lengthRule");
const upperRule = document.querySelector("#upperRule");
const numberRule = document.querySelector("#numberRule");

const passwordMessage = document.querySelector("#passwordMessage");


// =========================
// 1. DARK / LIGHT MODE
// =========================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark
        ? "Light Mode"
        : "Dark Mode";

    themeBtn2.textContent = isDark
        ? "Switch to Light"
        : "Switch to Dark";
}

themeBtn.addEventListener("click", toggleTheme);

themeBtn2.addEventListener("click", toggleTheme);


// =========================
// 2. COUNTER
// MINIMUM 1, MAXIMUM 10
// =========================

let count = 1;

increaseBtn.addEventListener("click", function () {

    if (count < 10) {

        count++;

        counterMessage.textContent = "Counter increased!";

    } else {

        counterMessage.textContent = "Maximum limit is 10!";

    }

    countDisplay.textContent = count;

});


decreaseBtn.addEventListener("click", function () {

    if (count > 1) {

        count--;

        counterMessage.textContent = "Counter decreased!";

    } else {

        counterMessage.textContent = "Minimum limit is 1!";

    }

    countDisplay.textContent = count;

});


// =========================
// 3. TODO LIST
// ADD AND DELETE TASK
// =========================

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task!");

        return;

    }

    const li = document.createElement("li");

    const taskName = document.createElement("span");

    const deleteBtn = document.createElement("button");

    taskName.textContent = taskText;

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    deleteBtn.addEventListener("click", function () {

        li.remove();

    });


    li.append(taskName, deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();

}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// =========================
// 4. PASSWORD VALIDATION
// =========================

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    const hasLength = password.length >= 8;

    const hasUppercase = /[A-Z]/.test(password);

    const hasNumber = /[0-9]/.test(password);


    // Length Rule

    lengthRule.textContent = hasLength
        ? "✔ At least 8 characters"
        : "✖ At least 8 characters";


    // Uppercase Rule

    upperRule.textContent = hasUppercase
        ? "✔ One uppercase letter"
        : "✖ One uppercase letter";


    // Number Rule

    numberRule.textContent = hasNumber
        ? "✔ One number"
        : "✖ One number";


    // Rule Colors

    lengthRule.className = hasLength ? "valid" : "invalid";

    upperRule.className = hasUppercase ? "valid" : "invalid";

    numberRule.className = hasNumber ? "valid" : "invalid";


    // Final Password Message

    if (hasLength && hasUppercase && hasNumber) {

        passwordMessage.textContent = "Strong Password! ✔";

        passwordMessage.className = "valid";

    } else {

        passwordMessage.textContent = "Password does not meet all rules.";

        passwordMessage.className = "invalid";

    }

});
