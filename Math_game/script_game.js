const getRandomNumInRange = (min, max) =>{
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}



const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,

}

btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Game started!"
        userAnswer.value = 0
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Check!"
        gameState.taskInProcess = true
    } else{
        // сравниваем ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText =  userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = (isRight) ? "You are right!" : "It's not right"
        btnGame.innerText = "Try again"
        gameState.taskInProcess = false
    }
}




// Еще варианты:
// const randomNum1 = getRandomNumInRange(0, 100)
// const randomNum2 = getRandomNumInRange(0, 100) 
// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} - ${randomValue2}`
// }

// let symbol
// if (Math.random() > 0.5) {
//     symbol = "+"
// } else {
//     symbol = "-"
// }