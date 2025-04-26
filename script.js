let menu = document.querySelector(".fixed-menu");

document.querySelector('.mobile-button').addEventListener("click", function(event){
    document.querySelector('.mobile-menu').classList.toggle("hide");
    document.querySelectorAll('.mobile-btn').forEach(function(item){
        item.classList.toggle('hide')
    })
})

menu.addEventListener("click", function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');

    if (clickTarget.classList.contains('nav-link')){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
        let mobile = document.querySelector('.mobile-menu')
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
    }
    let mobilemenu = document.querySelector(".mobile-menu")
    let body = document.querySelector("body")
    if (!body.classList.contains('off-scroll') && !mobilemenu.classList.contains('hide')){
        body.classList.add('off-scroll')
    }
    else {
        body.classList.remove('off-scroll')
    }
})
let classLink = '.main-link';

window.onscroll = function(){
    let h = document.documentElement.clientHeight;
    let y = window.scrollY
    //switch
    if (y >= h*4){
        classLink = '.comments-link';
    }
    else if (y >= h*3){
        classLink = '.works-link';
    }
    else if (y >= h*2){
        classLink = '.skills-link';
    }
    else if (y >= h){
        classLink = '.about-link';
    }
    else {
        classLink = '.main-link';
    }
    let activeButton = document.querySelector('.active');
    let newActiveButton = document.querySelector(classLink);

    if (!newActiveButton.classList.contains('active')) { //fix this later :)
        console.log("A")
        newActiveButton.classList.add('active');
        activeButton.classList.remove('active');
    }
};


