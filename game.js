
// 634 x 919
// Boxes 63 x 63


class Game {

    constructor() {

        this.frame = 0;
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

    }

    drawBackground() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        canvas.style.marginLeft = "-" + window.innerWidth / 5 + "px";
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth / 3;

        screenWidth = window.innerWidth / 3;
        screenHeight = window.innerHeight;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, window.innerWidth / 3, window.innerHeight);
        // ctx.fillStyle = "black";
        // ctx.fillRect(0, window.innerHeight * 0.95973884657, window.innerHeight, window.innerWidth / 3 * 0.05835962145);
    
    }

    drawGrid() {

        ctx.strokeStyle = "white";
        ctx.lineWidth = parseInt(((screenWidth * screenHeight) / 2) / 56400);

        // let scalar = ;
        // for (let row = 0; row < this.grid.length; row++) {
        //     for (let column = 0; column < this.grid[0].length; column++) {
        //         ctx.strokeRect(row * scalar, column * scalar, 10, 10);
        //     }
        // }

        let scalar = screenHeight / this.grid.length;

       
        ctx.fillStyle = "#fff";
        for (let x = 0; x < this.grid.length; x++)
            ctx.fillRect(0, x * scalar, screenWidth, 5);

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 20 * scalar - 5, screenWidth, 5);
    
        scalar = screenWidth / this.grid[0].length;
        
        ctx.fillStyle = "#fff";
        for (let y = 0; y < this.grid[0].length; y++)
            ctx.fillRect(y * scalar, 0, 5, screenHeight);
    
        ctx.fillStyle = "#fff";
        ctx.fillRect(10 * scalar - 5, 0, 5, screenHeight);

        // for (let i = 2; i < window.innerWidth / 3 * 0.99369085173; i += window.innerWidth / 3 * 0.09936908517) {
        //     for (let v = 2; v < window.innerHeight * 0.95973884657; v += window.innerWidth / 3 * 0.09936908517) {
        //         ctx.strokeRect(i, v, window.innerWidth / 3 * 0.09936908517, window.innerWidth / 3 * 0.09936908517);
        //     }
        // }

    }

    loop() {

        this.drawBackground();
        this.drawGrid();
        this.frame++;
        console.log(this.frame);
        window.requestAnimationFrame(this.loop.bind(this));

    }

}