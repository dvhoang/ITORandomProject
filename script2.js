
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
    duration: 10 * 1000
    //,animation: 'count'
  };

  


setTimeout(function(){
    odometer1.innerHTML = 1;
    odometer2.innerHTML = 2;
    odometer3.innerHTML = 8;
}, );

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function randomRun(){
    console.log("click random")
    const luckyNum1 = randomIntFromInterval(0, 2)
    const luckyNum2 = randomIntFromInterval(0, 9)
    const luckyNum3 = randomIntFromInterval(0, 9)

    odometer1.innerHTML = luckyNum1;
    odometer2.innerHTML = luckyNum2;
    odometer3.innerHTML = luckyNum3;
}

function nextPage(){
    console.log("click next")
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}