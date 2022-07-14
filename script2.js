// Confetti! https://www.kirilv.com/canvas-confetti/
import confetti from "https://cdn.skypack.dev/canvas-confetti";


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
var ignArray = [137,100,121,120,139,180,109,133,123,174,147,149,151,101,148,152,150,153,166,186,185,184,187,188,189,190,191,192,195,196,162,163,113,164,183,122]

init();
function init(){
    var index = 0
    for(let i = 100; i < 197; i++){
        if(ignArray.indexOf(i) == -1){
            luckyArray[index++]=i
        }
    }
    maskodometer1.classList.add("hidden-mask")
    maskodometer2.classList.add("hidden-mask")
    maskodometer3.classList.add("hidden-mask")
}

function randomRun(){
    console.log("click random")

    const randomIndex = randomIntFromInterval(0, luckyArray.length - 1)

    const luckyNumber = luckyArray.splice(randomIndex, 1)

    const luckyNum3 = Math.floor(luckyNumber / 100)
    const luckyNum2 = Math.floor((luckyNumber - luckyNum3 * 100) / 10)
    const luckyNum1 = (luckyNumber - luckyNum3 * 100) % 10

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

    maskodometer1.classList.remove("hidden-mask")
    maskodometer2.classList.remove("hidden-mask")
    maskodometer3.classList.remove("hidden-mask")

    odometer1.innerHTML = (luckyNum1 + 5) % 10;
    odometer2.innerHTML = (luckyNum2 + 5) % 10;
    odometer3.innerHTML = (luckyNum3 + 5) % 10;
    
    
    const delayInMilliseconds = 5000;
    
    setTimeout(function() {
        odometer1.innerHTML = luckyNum3;
        maskodometer1.classList.add("hidden-mask")
    }, delayInMilliseconds);

    setTimeout(function() {
        odometer2.innerHTML = luckyNum2;
        maskodometer2.classList.add("hidden-mask")
    }, 2 * delayInMilliseconds);

    setTimeout(function() {
        odometer3.innerHTML = luckyNum1;
        maskodometer3.classList.add("hidden-mask")
    }, 3 * delayInMilliseconds);
    
    setTimeout(function() {
        celebrate();
    }, 3 * delayInMilliseconds + 2000);
}

function nextPage(){
    // celebrate();
    console.log("click next")
    // var x = document.getElementById("snackbar");
    // x.className = "show";
    // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    window.location.href = 'whell.html';
    // window.open("whell.html", "_blank");
}


//========



// const counter = document.querySelector(".counter");
// const restartTrigger = document.querySelector(".btn-restart");

const colors = [
  getComputedStyle(document.body).getPropertyValue("--c1"),
  getComputedStyle(document.body).getPropertyValue("--c2"),
  getComputedStyle(document.body).getPropertyValue("--c3"),
  getComputedStyle(document.body).getPropertyValue("--c4"),
  getComputedStyle(document.body).getPropertyValue("--c5"),
  getComputedStyle(document.body).getPropertyValue("--c6"),
  getComputedStyle(document.body).getPropertyValue("--c7"),
];


function celebrate() {

  confetti({
    particleCount: 500,
    startVelocity:40,
    angle:-90,
    spread: 360,
    origin: { y: 0.5 },
    colors,
    disableForReducedMotion: false
  });
}


//============================

var padding = {top:20, right:40, bottom:0, left:0},
            w = 700 - padding.left - padding.right,
            h = 700 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();

        //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

        var data = [
            {"question":"Secret box",  "value":1,  "label":"🎁 Secret box"},
            {"question":"Drink 1 can of Beer", "value":1, "label":"🍺 Beer"},
            {"question":"Romano",  "value":1,  "label":"Consolation"},
            {"question":"Apple iPhone 11",  "value":1,  "label":"📱 First prize"},
            {"question":"Supper speed kettle",  "value":1,  "label":"Consolation"}, 
            {"question":"Sony True wireless",  "value":1,  "label":"🎧 Third prize"}, 
            {"question":"Anker Power core",  "value":1,  "label":"Consolation"}, 
            {"question":"Drink 1 can of Beer",  "value":1,  "label":"🍺 Beer"}, 
            {"question":"Enchanteur charming",  "value":1,  "label":"Consolation"}, 
            {"question":"Apple Watch 3",  "value":1,  "label":"⌚ Second prize"},   
        ];


        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);

        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});

        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            

        arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });

        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].label;
            });

        container.on("click", spin);


        function spin(d){
            
            container.on("click", null);

            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                console.log("done");
                container.on("click", null);
                return;
            }

            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;


            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }

            rotation += 90 - Math.round(ps/2);

            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){

                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#9c9998");

                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);

                    oldrotation = rotation;
                
                    container.on("click", spin);
                });
        }

        //make arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"black"});

        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});

        container.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 60)
        .style({"fill":"white","cursor":"pointer"});

        //spin text
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SPIN")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                //no support for crypto, get crappy random numbers
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }

            return array;
        }
