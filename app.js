const now = new Date()

const date = new Date();
const formattedDate = date.toISOString().split('T')[0];
console.log(formattedDate); // Example: 2024-12-17

let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

function updateClock(){
    hours = hours <10 ? '0' + hours:hours;
    // minutes = minutes <10 ? '0' + minutes:minutes;

    const timeString = `${hours}: ${minutes} PM`
    const clock = document.querySelector(".clock").textContent = timeString;
    const currentTime = document.querySelector(".currentTime").textContent = formattedDate
}
function updateSeconds(){
    seconds++
    if(seconds === 60){
        seconds=0
        minutes++
    }
}

function updateHours(){
    if(minutes === 60){
        minutes=0
        hours++
    }
}

setInterval(() => {
    updateClock()
    updateSeconds()
}, 1000)
setInterval(()=>{
    updateHours()
}, 60000)

const windows = document.querySelector(".windows")
const starUpWindow = document.querySelector(".starUpWindow")
const lightMode = document.querySelector(".lightMode")
const container = document.querySelector(".container")
const widget = document.querySelector(".widget")
const widgetBtn = document.querySelector(".widgetBtn")
const icons = document.querySelector(".icons")
const notificationBar = document.querySelector("notificationBar")
windows.addEventListener("click", ()=>{
    starUpWindow.classList.toggle("show")
})

lightMode.addEventListener("click", ()=>{
    container.classList.toggle("lightMode")
})
widgetBtn.addEventListener("click", ()=>{
    widget.classList.toggle("showWidget")
})

const inputPass = document.querySelector(".inputPass")
const logIn = document.querySelector(".logIn")
const logInForm = document.querySelector(".form")
function verifyPassword(event){
    event.preventDefault()
    const password = inputPass.value
    if(password === "Ch@ng3m3!"){
        logIn.style.display = "none"
    }else{
        alert("incorrect password")
    }
}
logInForm.addEventListener("submit", verifyPassword);
