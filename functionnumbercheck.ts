function numbercheck (num1, num2) {
  if (num1 == num2) {
    console.log("Both numbers match!");
    console.log("-------------------");
  }
  else {
    try {
      console.log("Sorry, both numbers do not match.");
    }
    finally {
      console.log("---------------------------------")
    }
  }
}

numbercheck(5100, 500)
