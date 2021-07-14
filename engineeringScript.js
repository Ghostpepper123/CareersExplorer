
document.querySelector("#GOTOmainPageFromEngineering").addEventListener('click', function(){
    window.document.location = './page1.html';
});

document.querySelector("#mechanicalHEADER").addEventListener('click', function(){
    window.document.location = './Engineering/mechanical.html';
});
document.querySelector("#mechanical").addEventListener('click', function(){
    window.document.location = './Engineering/mechanical.html';
});

document.querySelector("#electricalHEADER").addEventListener('click', function(){
    window.document.location = './Engineering/electrical.html';
});
document.querySelector("#electrical").addEventListener('click', function(){
    window.document.location = './Engineering/electrical.html';
});

document.querySelector("#enviroHEADER").addEventListener('click', function(){
    window.document.location = './Engineering/enviro.html';
});
document.querySelector("#enviro").addEventListener('click', function(){
    window.document.location = './Engineering/enviro.html';
});

document.querySelector("#civilHEADER").addEventListener('click', function(){
    window.document.location = './Engineering/civil.html';
});
document.querySelector("#civil").addEventListener('click', function(){
    window.document.location = './Engineering/civil.html';
});

function hoverNextPage(){
    console.log("just hovered!");
    //document.getElementById("nextPageButton"). = "nextPage2";
}
function notHoverNextPage(){
    console.log("just left!");
    //document.getElementById("nextPageButton").className = "nextPage1";
}


