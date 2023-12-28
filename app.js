
const form = document.getElementById('form');
form.addEventListener("submit", (e) => {
    const inputField = document.getElementById('email');
    const txt = inputField.value;
    if (txt === '') {
        const invalidMsg = document.getElementById('invalidMsg');
        invalidMsg.classList.add('show');
    }
    
    if (txt === '') {
        e.preventDefault();
    }

    
})

const closeBtn = document.getElementById('cncBtn');
function closeFun() {
    const invalidMsg = document.getElementById('invalidMsg');
    invalidMsg.classList.remove('show');
}

let scrollContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backbtn');
let nextBtn = document.querySelector('#nextbtn');

scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += screen.width;
});
backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= screen.width;
})

const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting;
const greetings = document.getElementById('wlc-greetings');
if(currentHour >= 5 && currentHour < 12) {
    greeting = 'Hello, Good morning 👋';
}else if(currentHour >= 12 && currentHour < 18){
    greeting = 'Hello, Good afternoon 👋';
}else {
    greeting = 'Hello, Good evening 👋';
}
greetings.innerText = greeting;
console.log(greeting);