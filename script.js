let textArea = document.getElementById('TextArea');
let words = document.getElementById('words');
let time  = 60;
const timeDisplay = document.querySelector('#time');
var started = false;
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        textArea.setAttribute('disabled', true);
    }
    timeDisplay.innerHTML = time;
}
const setFun = () => {
    if(textArea.value.length) {
        started = true
    }
    else{
        return
    }
}

textArea.addEventListener('input', () => {
    words.textContent = textArea.value.trim().split(/\s+/).filter((item) => item).length;
});
setFun()

started && setInterval(() => {
    countdown();
}, 1000);