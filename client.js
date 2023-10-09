function clickCounter() {
  const addOne = document.querySelector(".countUp");
  const downOne = document.querySelector(".countDown");
  const counterElement = document.querySelector(".counted");
  const inputElement = document.getElementById("input");
  const reset = document.querySelector(".reset");
  let count  = 0;

  // Resets the count to zero
  function resetCount(){
    count = 0;
    updateCount();
  }

  // Applies the changes into the count variable which is then applied to the span containing the count
  function updateCount() {
    counterElement.textContent = count;
  }
  
  // Increases count by 1
  function incrementOne() {
    count++;
    updateCount();
  }

  // Decreases count by 1
  function decrementOne() {
    if (count > 0){
      count--;
      updateCount();
    } else{
      alert("Count too low! STOP THAT");
    }
    }

    document.getElementById("exponent-form").addEventListener("submit", function(event){
      event.preventDefault();
        const exponent = parseFloat(inputElement.value)
        const expand = exponent.toExponential();
        count *= expand;
        updateCount();
      })

  reset.addEventListener("click", resetCount);
  addOne.addEventListener("click", incrementOne);
  downOne.addEventListener("click", decrementOne);
}

// String Concat function
document.getElementById("string-game-form").addEventListener("submit", function(event){
  event.preventDefault();

  //Input Values placed inside variables
  const name = document.getElementById("first-input").value;
  const animal = document.getElementById("second-input").value;
  const place = document.getElementById("third-input").value;

  
  if (name.length > 4 && animal.length > 4 && place.length > 4) { 
  // String Concatenation 
  const result = `Hello, my name is ${name}. My favorite animal is the ${animal}, and I love visiting the ${place}.`;
  
  // Replaces text above to show result
    document.querySelector(".replaced").innerHTML = result;
  } else {
    // If fields are empty, displays an error message
    document.querySelector(".replaced").innerHTML = "Please enter more than 4 characters in all the fields";
  }
})
// calls the function to the html
clickCounter();