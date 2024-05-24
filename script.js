document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("paintCanvas");
    const context = canvas.getContext("2d");
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let isPainting = false;
    
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    // Function to start painting
    function startPainting(event) {
      isPainting = true;
      
      draw(event);
    }
  
    // Function to stop painting
    function stopPainting() {
      isPainting = false;
      context.beginPath();
      
    }
    
    

    // Function to draw
    function draw(event) {
      if (!isPainting) return;
  
      context.lineWidth = 5;
      context.lineCap = "round";
      context.strokeStyle = "black";
  
      context.lineTo(event.clientX, event.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(event.clientX, event.clientY);
      
      
    }
    
    

    // Event listeners for mouse events
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearCanvas);
    
  });
  