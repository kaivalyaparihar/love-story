document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    let index = 0;
  
    function fadeInNextImage() {
      images[index].style.opacity = 0;
      index = (index + 1) % images.length;
      images[index].style.opacity = 1;
    }
    
  
    // Start the slideshow
    fadeInNextImage();
    setInterval(fadeInNextImage, 2000); // Change the delay (in milliseconds) as needed
  });
  