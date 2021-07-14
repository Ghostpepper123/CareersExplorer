
document.querySelector("#GOTOmainPageFromTrades").addEventListener('click', function(){
    window.document.location = './page1.html';
});

document.querySelector("#electricianHEADER").addEventListener('click', function(){
    window.document.location = './Trades/electrician.html';
});
document.querySelector("#electrician").addEventListener('click', function(){
    window.document.location = './Trades/electrician.html';
});

document.querySelector("#pipefitterHEADER").addEventListener('click', function(){
    window.document.location = './Trades/pipefitter.html';
});
document.querySelector("#pipefitter").addEventListener('click', function(){
    window.document.location = './Trades/pipefitter.html';
});

document.querySelector("#aircraftHEADER").addEventListener('click', function(){
    window.document.location = './Trades/aircraft.html';
});
document.querySelector("#aircraft").addEventListener('click', function(){
    window.document.location = './Trades/aircraft.html';
});

document.querySelector("#welderHEADER").addEventListener('click', function(){
    window.document.location = './Trades/welder.html';
});
document.querySelector("#welder").addEventListener('click', function(){
    window.document.location = './Trades/welder.html';
});

function hoverNextPage(){
    console.log("just hovered!");
    //document.getElementById("nextPageButton"). = "nextPage2";
}
function notHoverNextPage(){
    console.log("just left!");
    //document.getElementById("nextPageButton").className = "nextPage1";
}


