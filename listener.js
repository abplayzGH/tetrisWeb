window.addEventListener("keydown", (event) => {
    
    if (event.isComposing || event.keyCode === 229)
      return;

    if (game.started && !game.paused && game.piece != null) {
        console.log(event.code);
        switch (event.code) {

            // case "ArrowUp":
            // case "KeyW":
            //     game.translate(-1, 0);
            //     break;
            
            case "ArrowLeft":
            case "KeyA":
                game.piece.location = game.translate(game.piece, 0, -1);
                break;
            
            case "ArrowDown":
            case "KeyS":
                game.piece.location = game.translate(game.piece, 1, 0);
                game.frame = 0;
                break;
        
            case "ArrowRight":
            case "KeyD":
                game.piece.location = game.translate(game.piece, 0, 1);
                break;

        }
    }
  });