var button=document.getElementById("toggle-button");
var sideBar=document.getElementById("side-bar");
button.addEventListener('click',()=>{
    sideBar.classList.toggle('collapse');
});

