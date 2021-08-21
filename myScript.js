
var count = document.querySelector('.count');
var decrease = document.querySelector('.decrease');
var reset = document.querySelector('.reset');
var increase = document.querySelector('.increase');


// Simplification of the below codes:

var buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('increase')){
        count.innerHTML++;
    }

    if(e.target.classList.contains('reset')){
        count.innerHTML = 0;
    }

    if(e.target.classList.contains('decrease')){
        count.innerHTML--;
    }
    setColor();
})

// Color change:

function setColor() {
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }
    else if(count.innerHTML == 0){
        count.style.color = "white";
    }
    else {
        count.style.color = "red";
    }
}






// increase.addEventListener('click', () => {
//          console.log("Increase one by one");
//          count.innerHTML++;
// });

// decrease.addEventListener('click', () => {
//     console.log("decrease one by one");
//     count.innerHTML--;
// });

// reset.addEventListener('click', () => {
//     console.log("decrease one by one");
//     count.innerHTML= 0;
// });