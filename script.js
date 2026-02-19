// Wait for the entire HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the elements we need
    const button = document.getElementById('myButton');
    const output = document.getElementById('js-output');

    let clickCount = 0;

    // 2. Define the function to run when the button is clicked
    button.addEventListener('click', () => {
        // Add animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);

        clickCount++;

        if (clickCount === 1) {
            output.textContent = "🎉 JavaScript is working! You clicked once.";
            output.style.color = "green";
        } else {
            output.textContent = `You have clicked the button ${clickCount} times now!`;
            output.style.color = "blue";
        }
    });
});
