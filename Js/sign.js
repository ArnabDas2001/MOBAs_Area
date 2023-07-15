function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var card3 = document.getElementById('card3');
    card3.classList.toggle('active');
}
function flip(){
    document.getElementById("form").style.
        transform='rotateY(180deg)';
}
function flip1(){
    document.getElementById("form").style.
        transform='rotateY(0deg)';
}