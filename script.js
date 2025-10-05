// functions

// getInnerText from class

function getInnerTextNumber(className) {
    return parseInt(document.getElementById(className).innerText)
}

// set inner text
function setInnerText(value) {
    document.getElementById
}


// functionalities

// heart
const hearts = document.getElementsByClassName("heart-btn")
for(const heart of hearts){
    heart.addEventListener("click",
        function(){
            const heartCount = getInnerTextNumber("heart-count")
            const heartCountAdd = heartCount+1
            document.getElementById("heart-count").innerText = heartCountAdd
        }
    )
}

// call
const calls = document.getElementsByClassName("call-btn")
for(const call of calls){
    call.addEventListener("click",
        function(){
            const coinCount = getInnerTextNumber("coin-count")

            if(coinCount < 20){
                alert("You don't have enough coins. To call, you must have at least 20 coins.")
                return;
            }

            const title = this.parentNode.parentNode.querySelector(".title").innerText
            const number = this.parentNode.parentNode.querySelector(".number").innerText

            alert("Calling " + title + " " + number)
            const coinCountDecrease = coinCount - 20
            document.getElementById("coin-count").innerText = coinCountDecrease
        }
    )
}