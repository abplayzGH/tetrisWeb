const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 300 x 150
// Boxes 30 x 10

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

function prepare() {

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 200, 100);
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(30, 0);
    // ctx.stroke();

}

prepare();