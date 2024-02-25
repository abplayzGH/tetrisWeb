window.addEventListener("keydown", (event) => {
    
    if (event.isComposing || event.keyCode === 229)
      return;

    if (game.started && !game.paused) {
        console.log(event.code);
        switch (event.code) {

            case "ArrowUp":
            case "KeyW":
                game.translate(-1, 0);
                break;
            
            case "ArrowLeft":
            case "KeyA":
                game.translate(0, -1);
                break;
            
            case "ArrowDown":
            case "KeyS":
                game.translate(1, 0);
                break;
        
            case "ArrowRight":
            case "KeyD":
                game.translate(0, 1);
                break;

        }
    }
  });