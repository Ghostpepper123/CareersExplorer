
document.querySelector("#GOTOmainPageFromHealthcare").addEventListener('click', function(){
    window.document.location = './page1.html';
});

document.querySelector("#nurseHEADER").addEventListener('click', function(){
    window.document.location = './Healthcare/nurse.html';
});
document.querySelector("#nurse").addEventListener('click', function(){
    window.document.location = './Healthcare/nurse.html';
});

document.querySelector("#doctorHEADER").addEventListener('click', function(){
    window.document.location = './Healthcare/doctor.html';
});
document.querySelector("#doctor").addEventListener('click', function(){
    window.document.location = './Healthcare/doctor.html';
});

document.querySelector("#audiologistHEADER").addEventListener('click', function(){
    window.document.location = './Healthcare/audiologist.html';
});
document.querySelector("#audiologist").addEventListener('click', function(){
    window.document.location = './Healthcare/audiologist.html';
});

document.querySelector("#surgeonHEADER").addEventListener('click', function(){
    window.document.location = './Healthcare/surgeon.html';
});
document.querySelector("#surgeon").addEventListener('click', function(){
    window.document.location = './Healthcare/surgeon.html';
});

function hoverNextPage(){
    console.log("just hovered!");
    //document.getElementById("nextPageButton"). = "nextPage2";
}
function notHoverNextPage(){
    console.log("just left!");
    //document.getElementById("nextPageButton").className = "nextPage1";
}


