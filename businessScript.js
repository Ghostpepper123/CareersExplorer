
document.querySelector("#GOTOmainPageFromBusiness").addEventListener('click', function(){
    window.document.location = './page1.html';
});

document.querySelector("#accountantHEADER").addEventListener('click', function(){
    window.document.location = './Business/accountant.html';
});
document.querySelector("#accountant").addEventListener('click', function(){
    window.document.location = './Business/accountant.html';
});

document.querySelector("#financialanalystHEADER").addEventListener('click', function(){
    window.document.location = './Business/financialanalyst.html';
});
document.querySelector("#financialanalyst").addEventListener('click', function(){
    window.document.location = './Business/financialanalyst.html';
});

document.querySelector("#fundraiserHEADER").addEventListener('click', function(){
    window.document.location = './Business/fundraiser.html';
});
document.querySelector("#fundraiser").addEventListener('click', function(){
    window.document.location = './Business/fundraiser.html';
});

document.querySelector("#marketHEADER").addEventListener('click', function(){
    window.document.location = './Business/market.html';
});
document.querySelector("#market").addEventListener('click', function(){
    window.document.location = './Business/market.html';
});

function hoverNextPage(){
    console.log("just hovered!");
    //document.getElementById("nextPageButton"). = "nextPage2";
}
function notHoverNextPage(){
    console.log("just left!");
    //document.getElementById("nextPageButton").className = "nextPage1";
}


