var amountClicks = Math.ceil(9*Math.random());
var totalClicks = amountClicks*Math.random()*5;
var executeAmount = document.getElementById('amount');
var executeRating = document.getElementById('rating')
var theStars = document.querySelectorAll('.norating');

function colorStar(starNumber, procent) {
    var name = 'star' + starNumber;
    procent = Math.min(procent, 100);
    document.getElementById(name).style.width = procent+'%';
}

function colorTheStars(rating) {
    for(var i=1; i<6; i++) {
        colorStar(i, rating*100);
        rating --;
    }
}
// random genereren en executen in DOM
function execute(){
    executeAmount.innerHTML = amountClicks;
    executeRating.innerHTML = Math.ceil(10*totalClicks/amountClicks)/10;
    colorTheStars(Math.ceil(10*totalClicks/amountClicks)/10);
}
execute();

function processClick() {
    amountClicks ++;
    var number = this.getAttribute('data-role');
    totalClicks += parseInt(number);
    execute();
}
for(var i=0; i<theStars.length; i++) {
    theStars[i].addEventListener('click', processClick);
}