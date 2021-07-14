
document.querySelector("#GOTOmainPageFromEducation").addEventListener('click', function(){
    window.document.location = './page1.html';
});

document.querySelector("#tutorHEADER").addEventListener('click', function(){
    window.document.location = './Education/tutor.html';
});
document.querySelector("#tutor").addEventListener('click', function(){
    window.document.location = './Education/tutor.html';
});

document.querySelector("#teacherHEADER").addEventListener('click', function(){
    window.document.location = './Education/teacher.html';
});
document.querySelector("#teacher").addEventListener('click', function(){
    window.document.location = './Education/teacher.html';
});

document.querySelector("#professorHEADER").addEventListener('click', function(){
    window.document.location = './Education/professor.html';
});
document.querySelector("#professor").addEventListener('click', function(){
    window.document.location = './Education/professor.html';
});

document.querySelector("#librarianHEADER").addEventListener('click', function(){
    window.document.location = './Education/librarian.html';
});
document.querySelector("#librarian").addEventListener('click', function(){
    window.document.location = './Education/librarian.html';
});

function hoverNextPage(){
    console.log("just hovered!");
    //document.getElementById("nextPageButton"). = "nextPage2";
}
function notHoverNextPage(){
    console.log("just left!");
    //document.getElementById("nextPageButton").className = "nextPage1";
}


