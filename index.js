const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone");
let phoneRegEx = new RegExp(/^[0-9]g/);


name1.addEventListener("change", function () {
    if (name1.value.length < 2) {
        alert("the name must be at least 2 characters");
        name1.focus();
    }
});
email.addEventListener("change", function () {
    if (!email.value.includes("@")) {
        alert("this field should be a valid email");
        email.setAttribute("class", );
        email.focus();
    }
});
phoneNumber.addEventListener("change", function () {
    if (phoneNumber.value.length < 8) {
        alert("the phone number should contain 8 digits");
   
        phoneNumber.focus();
    }
    if (!phoneRegEx.test(phoneNumber.value)) {
        alert("the phone number should contain only number");
        
        phoneNumber.focus();
    }
});