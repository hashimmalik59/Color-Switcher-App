// Accessing Elements
const userInput = document.querySelector("input");
const submitColorButton = document.querySelector(".submit-color");
const randomColorButton = document.querySelector(".random-color");
let errorMessage = document.querySelector(".message");
let currentColor = document.querySelector(".current-color");

// Background color logic
submitColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = `${userInput.value}
    `;
    currentColor.innerHTML = `Current Color: <b>${userInput.value}</b>`;
    randomColorButton.innerHTML = "Random Color";
    if (!userInput.value) {
        errorMessage.classList.remove("hide");
        userInput.classList.add("error");
    }
})

currentColor.addEventListener("click", () => {
    userInput.classList.add("error");
    errorMessage.classList.remove("hide");
})

// Random Background color logic
randomColorButton.addEventListener("click", () => {

    let redRandom = Math.floor(Math.random() * 255) + 1;
    let greenRandom = Math.floor(Math.random() * 255) + 1;
    let blueRandom = Math.floor(Math.random() * 255) + 1;
    let randomColor = userInput.value = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`
    currentColor.innerHTML = `Current Color is: <b>${randomColor}</b>`
    document.body.style.backgroundColor = `${randomColor}`
    submitColorButton.innerHTML = "Apply Color"
    errorMessage.classList.add("hide");
})