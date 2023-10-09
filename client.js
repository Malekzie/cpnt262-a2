function clickCounter() {
  // Defines html tags as variables to be used inside function
  const addOne = document.querySelector(".countUp");
  const removeOne = document.querySelector(".countDown");
  const counterElement = document.querySelector(".counted");
  // Counter variable
  let counter = 0;

    // Inner function that updates the counter
    function negativeCounter(){
      counterElement.innerHTML = counter;
    }
    
  // Inner function that decrements the counter
  function decrementCounter(){
    if (counter > 0){
      counter--;
      negativeCounter();
    } else {
      alert("Count too low! STOP THAT!");
    }
  }
}