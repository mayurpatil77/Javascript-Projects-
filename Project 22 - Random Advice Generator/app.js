// Getting The Elements 

const advice = document.querySelector("#advice");
const getAdvice = document.querySelector("#getAdvice");
 
async function getAdviceFromAPI(){
   const response = await fetch("https://api.adviceslip.com/advice");
   const data = await response.json();
   advice.textContent = data.slip.advice ;
   
}

getAdvice.addEventListener("click", getAdviceFromAPI);