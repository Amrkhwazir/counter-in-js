let increase = document.querySelector(".increase")
let reset = document.querySelector(".reset")
let decrease = document.querySelector(".decrease")
let count = document.querySelector(".cont")

let c = 0;
function increament(){
    count.textContent = c++
    count.style.color = "green"
}

function decremaent(){
    count.textContent = c--
    count.style.color = "red"

}


function reload(){
    window.location.reload()
    count.style.color = "rgb(15, 29, 45)"

}