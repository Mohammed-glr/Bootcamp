//---------------------------------------------------------------------------------
// ! Do not edit this document !
//---------------------------------------------------------------------------------
//
//
//Get width from url
let cw = Number(findGetParameter("width"));
if(isNaN(cw) || cw === 0){
    cw = window.innerWidth;
}
//Get height from url
let ch = Number(findGetParameter("height"));
if(isNaN(ch) || ch === 0){
    ch = window.innerHeight;
}

//Load script with P5 sketch
let script = document.createElement("script");
script.type = "text/javascript";
//Place your sketch file here
script.src = "sketch.js";
document.body.insertBefore(script, document.body.lastChild);

//let run is used in sketch (controlled by parent page)
let run = true;
//Get data from parent
window.onmessage = function(event){
    if (event.data === 'play') {
        //Get 'play' makes sketch draw function work
        run = true;
    }else if (event.data === "pause"){
        //Get 'pause' makes sketch draw function pause
        run = false;
    }else if(event.data.includes("init")){
        //For setting manetag in parent page
        let num = Number(event.data.substr(4));
        //---------------------------------------------------------------------------------
        //Fill your name and the title to display on parent page
        //
        let overlayData = { "artist":"MDH", "title":"GLR", "num":num, "time":0.2};
        //
        //----------------------------------------------------------------------------------
        window.parent.postMessage(overlayData, document.location.ancestorOrigins[0]);
    }
    console.log(event.data);
};

//Function used to get data from url
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}