let active = document.querySelectorAll(".container .rate span")
document.addEventListener("click", (e) => {
    active.forEach((rate) => {
        if (rate.classList.contains("active") === true) {
            rate.classList.remove("active")
        }
    })
    if (e.target.className === "rate-btn") {
        e.target.classList.add("active")
    }
    let rateting = document.querySelector('.active').innerHTML
    let rateing = document.querySelector(".rateing")
    rateing.innerHTML = rateting
})
let button = document.querySelector(".submit")
let thank = document.querySelector(".tow")
let one = document.querySelector(".one")
button.onclick = function () {
    thank.style.display = "block"
    one.style.display = "none"
}