// Accessing Elements
const userInput = document.querySelector("input");
const submitColorButton = document.querySelector(".submit-color");
const randomColorButton = document.querySelector(".random-color");
let errorMessage = document.querySelector("span")

// Background color logic
submitColorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = `${userInput.value}
    `;
    submitColorButton.innerHTML = `Apply Color: <b>${userInput.value}</b>`;
    randomColorButton.innerHTML = "Random Color";
    if (!userInput.value) {
        errorMessage.classList.remove("hide");
        userInput.style.border = "red 1px solid";
    }
})

// Random Background color logic
randomColorButton.addEventListener("click", () => {

    let redRandom = Math.floor(Math.random() * 255) + 1;
    let greenRandom = Math.floor(Math.random() * 255) + 1;
    let blueRandom = Math.floor(Math.random() * 255) + 1;
    let randomColor = userInput.value = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`
    randomColorButton.innerHTML = `Random Color is: <b>${randomColor}</b>`
    document.body.style.backgroundColor = `${randomColor}`
    submitColorButton.innerHTML = "Apply Color"
    errorMessage.classList.add("hide");
    userInput.style.border = "1px solid #000"
})