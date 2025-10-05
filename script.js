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
for (const heart of hearts) {
    heart.addEventListener("click",
        function () {
            const heartCount = getInnerTextNumber("heart-count")
            const heartCountAdd = heartCount + 1
            document.getElementById("heart-count").innerText = heartCountAdd
        }
    )
}

// copy
const copies = document.getElementsByClassName("copy-btn")
for (const copy of copies) {
    copy.addEventListener("click",
        function () {
            const copyCount = getInnerTextNumber("copy-count")
            const copyCountInc = copyCount + 1
            document.getElementById("copy-count").innerText = copyCountInc
            const number = this.parentNode.parentNode.querySelector(".number").innerText

            navigator.clipboard.writeText(number)
            alert("This number is copied: " + number)
        }
    )
}

// call

const history = []
const calls = document.getElementsByClassName("call-btn")
for (const call of calls) {
    call.addEventListener("click",
        function () {
            const coinCount = getInnerTextNumber("coin-count")

            if (coinCount < 20) {
                alert("❌ You don't have enough coins. To call, you must have at least 20 coins.")
                return;
            }

            const title = this.parentNode.parentNode.querySelector(".title").innerText
            const number = this.parentNode.parentNode.querySelector(".number").innerText

            alert("📞 Calling " + title + " " + number + "...")
            const coinCountDecrease = coinCount - 20
            document.getElementById("coin-count").innerText = coinCountDecrease

            const data = {
                name: this.parentNode.parentNode.querySelector(".title").innerText,
                number: this.parentNode.parentNode.querySelector(".number").innerText,
                time: new Date().toLocaleTimeString('en-US')
            }
            history.unshift(data)

            historyContainer = document.getElementById("history-container")
            historyContainer.innerText = ""

            for (const data of history) {
                const div = document.createElement("div")
                div.innerHTML = `
                <div class="bg-[#FAFAFA] h-[83px] rounded-lg flex justify-between items-center p-4">
                        <div>
                            <h1 class="text-[18px] font-bold">${data.name}</h1>
                            <p class="text-[18px] text-gray-500">${data.number}</p>
                        </div>
                        <p>${data.time}</p>
                    </div>
                `
                historyContainer.appendChild(div)
            }
        }
    )
}

// clear history
document.getElementById("clear-btn").addEventListener("click",
    function () {
        history.length = 0
        historyContainer.innerText = ""
    }
)