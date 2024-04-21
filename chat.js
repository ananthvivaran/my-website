// Function to handle sending messages
function sendMessage() {
    // Get the input element where the user types the message
    var messageInput = document.querySelector('input[type="text"]');

    // Get the value of the message input
    var message = messageInput.value;

    // Check if the message is not empty
    if (message.trim() !== "") {
        // Create a new message element
        var newMessage = document.createElement("p");

        // Set the text content of the message element to the user's message
        newMessage.textContent = message;

        // Check if the message is from the user
        if (messageInput.parentElement.classList.contains('footer')) {
            // Add a class to distinguish user messages
            newMessage.classList.add('user_message');
        } else {
            // Add a class to distinguish other messages
            newMessage.classList.add('message');
        }

        // Get the chat body element where messages will be displayed
        var chatBody = document.querySelector('.body');

        // Append the new message element to the chat body
        chatBody.appendChild(newMessage);

        // Clear the message input
        messageInput.value = "";

        // Scroll the chat body to the bottom to show the latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Event listener to handle sending messages when the send button is clicked
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    sendMessage(); // Call the sendMessage function
});

// Optional: You can also handle sending messages when the user presses the Enter key
document.querySelector('input[type="text"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent line break
        sendMessage(); // Call the sendMessage function
    }
});
