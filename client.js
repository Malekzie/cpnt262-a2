function clickCounter() {
  const addOne = document.querySelector(".countUp");
  const downOne = document.querySelector(".countDown");
  const counterElement = document.querySelector(".counted");

  let count  = 0;

  function updateCount() {
    counterElement.textContent = count;
  }
  
  function incrementOne() {
    count++;
    updateCount();
  }

  function decrementOne() {
    if (count > 0){
      count--;
      updateCount();
    } else{
      alert("Count too low! STOP THAT");
    }
  }

  addOne.addEventListener("click", incrementOne);
  downOne.addEventListener("click", decrementOne);
}

document.getElementById("string-game-form").addEventListener("submit", function(event){
  event.preventDefault();

  //Input Values placed inside variables
  const name = document.getElementById("first-input").value;
  const animal = document.getElementById("second-input").value;
  const place = document.getElementById("third-input").value;

  
  if (name && animal && place) { 
  // String Concatenation 
  const result = `Hello, my name is ${name}. My favorite animal is the ${animal}, and I love visiting the ${place}.`;
  
  // Replaces text above to show result
    document.querySelector(".replaced").innerHTML = result;
  } else {
    // If fields are empty, displays an error message
    document.querySelector(".replaced").innerHTML = "Please fill in the fields";
  }

  // Checks values to make sure input value is more than three characters
})
// calls the function to the html
clickCounter();