const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let game;

// 634 x 919
// Boxes 63 x 63

class Piece {
    
    constructor() {
        //
    }

}

class Square extends Piece {
    
    constructor() {
        super();
    }



}

class Game {

    constructor() {  }

    prepare() {

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 634, 919);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 882, 634, 37);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 4;
        for (let i = 2; i < 630; i += 63) {
            for (let v = 2; v < 882; v += 63) {
                ctx.strokeRect(i, v, 63, 63);
            }
        }
    
    }

    loop() {

        this.prepare();

    }

}


game = new Game();
game.loop();