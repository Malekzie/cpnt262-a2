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

  // Adds event listeners on variables and uses the functions as its parameter
  removeOne.addEventListener("click", decrementCounter);

  addOne.addEventListener("click", incrementCounter);
  }

  // Inner function that increments counter
  function incrementCounter() {
    counter++;
    updateCounter();
  }

  // Adds event listeners on variables and uses the functions as its parameter
  removeOne.addEventListener("click", decrementCounter);

  addOne.addEventListener("click", incrementCounter);
}

// Function for the Password Checking form
function passwordChecker(){
  // makes sure that JS is executed after page has loaded in 
  document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("login-form");
    const passwordInput = document.getElementById("user-pass-input");
    const errMsg = document.getElementById("error-message");
    
    loginForm.addEventListener("submit", function(event){
      event.preventDefault(); 
    })
    // Places the value of the inputted password as value to the variable
    const enteredPassword = passwordInput.value;

    if(isValidPassword(enteredPassword)) {
      errMsg.style.color = "green";
      errMsg.innerHTML = "Login Successful!";
    } else {
      errMsg.style.color = "red";
      errMsg.innerHTML = "Invalid Password. Try again!";
    }

    // Function to check minim password criteria
    function isValidPassword(password) {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordPattern.test(password);
    }
  })
}

// calls the function to the html
clickCounter();
passwordChecker();