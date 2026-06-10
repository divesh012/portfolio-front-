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
  document.addEventListener("DOMContentLoaded", function() {
    const heading = "Contact's";
    let index = 0;
    const speed = 450; // Speed in milliseconds

    function typeWriter() {
        if (index < heading.length) {
            document.getElementById("animated-heading").innerHTML += heading.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
  