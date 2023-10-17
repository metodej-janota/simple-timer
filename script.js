let time = document.getElementById("time")
let secSpan = document.getElementById("sec")
let minSpan = document.getElementById("min")
let hourSpan = document.getElementById("hour")
let timeToGo = document.getElementById("timeToGo")
let colorBar = document.getElementById("barStatus")

let sec = 0
let min = 0
let hour = 0

let checker = 1
let checker2 = 0

let width = 0
let max = 0

let stoped = false

let myPromt = Math.trunc(prompt("Type time to count"))
checker2 = myPromt

if(myPromt == NaN){
    location.reload();
}

if(Math.trunc(myPromt / 60) >= 10){
    timeToGo.innerHTML = Math.trunc(myPromt / 60) + ":" + (myPromt % 60)

} else if(Math.trunc(myPromt / 60) < 10){
    timeToGo.innerHTML = "0" + Math.trunc(myPromt / 60) + ":0" + (myPromt % 60)

}

let selectedTime = 100 / myPromt / 1000 * 16
console.log("0" + Math.trunc(myPromt / 60) + ":" + (myPromt % 60))

let drip = setInterval(() => {
    width += selectedTime
    colorBar.style.width = width + "%"
}, 16)

let swag = setInterval(() => {

    if(checker == checker2){
        clearInterval(swag)
        stoped = true
    }

    checker++
    sec++

    console.log(selectedTime)

    if(sec == 0){
        secSpan.innerHTML = "00"

    }else if (sec < 10) {
        secSpan.innerHTML = "0" + sec

    } else if (sec >= 10) {
        secSpan.innerHTML = sec

        if (sec == 60) {
            min++
            sec = 0
            minSpan.innerHTML = "0" + min
            secSpan.innerHTML = sec

            if(min >= 10){
                minSpan.innerHTML = min

                if(min == 60){
                    min = 0
                    hour++
                    hourSpan.innerHTML = hour + ":"
                }
            }
        }
    }
}, 1000);

function resetButton() {
    sec = 0
    min = 0
    colorBar.style.width = "0%"
    width = 0
    checker = 1

    minSpan.innerHTML = "0" + min
    secSpan.innerHTML = "0" + sec
}