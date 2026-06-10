document.addEventListener('DOMContentLoaded', () => {
  console.log("Loader initialized...");

  // Simulate loading timeout
  setTimeout(() => {
    // Hide the loader
    document.querySelector('.background').style.display = 'none';

    // Display the canvas animation and main content
    document.getElementById('animationCanvas').style.display = 'block';
    document.querySelector('.main-content').style.display = 'block';

    // Initialize the canvas animation
    initializeCanvasAnimation();
  }, 3000); // Adjust timeout duration as needed
});
