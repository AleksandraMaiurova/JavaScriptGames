const chosenEl = document.querySelectorAll(".chosen_block-container > div")
const counterEl = document.querySelector(".chosen_block span")
const StateofGame = {
    numberOfEl: 0,
}
const changeCount = (value) => {
    StateofGame.numberOfEl += value // то же самое что и StateofGame.numberOfEl+value
    counterEl.innerText = StateofGame.numberOfEl
}

const eventFuction = (e) => {
    if (e.target.className === ""){
        e.target.className = "chosen_element"
        changeCount(1)
    } else {
        e.target.className = ""
        changeCount(-1)
    }

}
for (let i=0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", eventFuction)
}


 





