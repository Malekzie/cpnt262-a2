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

    // Function to check minimum password criteria
    function isValidPassword(password) {
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return passwordPattern.test(password);
    }
  })
}

// calls the function to the html
clickCounter();
passwordChecker();