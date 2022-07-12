
window.odometerOptions = {
    auto: false, // Don't automatically initialize everything with class 'odometer'
    selector: '.my-numbers', // Change the selector used to automatically find things to be animated
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 3000, // Change how long the javascript expects the CSS animation to take
    theme: 'car', // Specify the theme (if you have more than one theme css file on the page)
    animation: 'count' // Count is a simpler animation method which just increments the value,
                       // use it when you're looking for something more subtle.
};

const randomButton = document.getElementById("randombutton");
randomButton.addEventListener("click", randomRun);

const nextButton = document.getElementById("nextbutton");
nextButton.addEventListener("click", nextPage);

window.odometerOptions = {
    // duration: 10 * 1000
    //,animation: 'count'
  };

setTimeout(function(){
    odometer1.innerHTML = 0;
    odometer2.innerHTML = 0;
    odometer3.innerHTML = 0;
}, );

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var luckyArray = []

init();
function init(){
    var index = 0
    for(let i = 100; i< 200; i++){
        if(i%2 != 0){
            luckyArray[index++]=i
        }
    }
}

function randomRun(){
    console.log("click random")

    const randomIndex = randomIntFromInterval(0, luckyArray.length - 1)

    const luckyNumber = luckyArray.splice(randomIndex, 1)

    const luckyNum1 = Math.floor(luckyNumber / 100)
    const luckyNum2 = Math.floor((luckyNumber - luckyNum1 * 100) / 10)
    const luckyNum3 = (luckyNumber - luckyNum1 * 100) % 10

    console.log("arr:"+luckyArray)
    console.log("ln:"+luckyNumber)
    console.log("ln1:"+luckyNum1)
    console.log("ln2:"+luckyNum2)
    console.log("ln3:"+luckyNum3)

    // while(true){
    //     odometer1.innerHTML = 9;
    //     await new Promise(r => setTimeout(r, 1000));
    //     odometer1.innerHTML = 5;
    // }

    
    const delayInMilliseconds = 5000;
    odometer3.innerHTML = luckyNum3;

    setTimeout(function() {
        odometer2.innerHTML = luckyNum2;
    }, delayInMilliseconds);

    setTimeout(function() {
        odometer1.innerHTML = luckyNum1;
    }, 2*delayInMilliseconds);
}

function nextPage(){
    console.log("click next")
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}