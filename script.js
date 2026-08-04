const words = [
"Cloud Engineer",
"Data Engineer",
"AI Enthusiast",
"Cybersecurity Learner",
"Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

const currentWord = words[wordIndex];

if(!deleting){
charIndex++;
}else{
charIndex--;
}

typing.textContent =
currentWord.substring(0,charIndex);

if(!deleting && charIndex === currentWord.length){

deleting = true;

setTimeout(type,1200);

return;
}

if(deleting && charIndex === 0){

deleting = false;

wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

}

setTimeout(type,deleting ? 50 : 100);
}

type();

/* COUNTERS */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});