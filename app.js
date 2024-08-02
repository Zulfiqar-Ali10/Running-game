
const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let setInter;

const startTimer = ()=>{
     setInter = setInterval(()=>{
        countDownElement.innerText = startCount++;
    }, 1000);
};

const stopTimer = ()=>{
   clearInterval(setInter);
};

const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(setInter);
};

const showStopValue = () => {
    const para = document.createElement("p");
    para.innerText = `The stop Time is ${startCount}`
    resetValueElement.append(para);
}
const clearTimeValue = () => {
    resetValueElement.innerHTML = "";
}


document.querySelector(".start-btn").addEventListener("click", startTimer);
document.querySelector(".reset-btn").addEventListener("click", resetTimer);
document.querySelector(".stop-btn").addEventListener("click", stopTimer);
document.querySelector(".time-btn").addEventListener("click", showStopValue);
document.querySelector(".clear-btn").addEventListener("click", clearTimeValue);