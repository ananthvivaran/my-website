document.addEventListener('DOMContentLoaded', function () {
  // Ensure the DOM is fully loaded before executing this code

  // Attach the onclick event handler to the button with id "submitBtn"
  var submitButton = document.getElementById('submitBtn');

  if (submitButton) {
    // If the button is found, attach the onclick event
    submitButton.onclick = async function () {
      try {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if any field is empty
        if (!name || !email || !password) {
          alert("Please fill in all fields");
          return; // Stop execution if any field is empty
        }

        const formData = {
          name: name,
          email: email,
          password: password,
        };

        const response = await fetch('http://localhost:3000/register', { // Corrected endpoint here
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log(response); // Log the entire response for debugging

        if (response.ok) {
          const result = await response.json();
          console.log(result); // Log the result for debugging
          alert(`User added with _id: ${result.insertedId}`);
          // Redirect to login page after successful registration
          window.location.href = 'login.html'; // Assuming your login page is named 'login.html'
        } else {
          console.error(response.statusText); // Log the error status for debugging
          alert('Error adding user');
        }
      } catch (error) {
        console.error(error);
        alert('An unexpected error occurred. Check the console for details.');
      }
    };
  } else {
    // If the button is not found, log an error
    console.error("Button not found!");
  }
});
