
// 634 x 919
// Boxes 63 x 63


class Game {

    constructor() {

        this.frame = 0;
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
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

        canvas.style.marginLeft = "-" + window.innerHeight * 0.9 / 4 + "px";
        canvas.style.marginTop = "" + (window.innerHeight * 0.025) + "px";
        canvas.height = window.innerHeight * 0.9;
        // canvas.width = window.innerWidth / 4.89;
        canvas.width = canvas.height / 2 + 1;

        screenWidth = canvas.width;
        screenHeight = canvas.height;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, window.innerWidth / 3, window.innerHeight * 0.9);
        // ctx.fillStyle = "black";
        // ctx.fillRect(0, window.innerHeight * 0.95973884657, window.innerHeight, window.innerWidth / 3 * 0.05835962145);
    
    }

    drawGrid() {

        ctx.lineWidth = 2;

        let scalar = (screenHeight / this.grid[0].length * (1-(1.1 - 1))) / 2;

        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[0].length; column++) {
                // ctx.strokeRect(column * scalarX - (column * scalarX), row * scalarY, scalarY, scalarY);
                ctx.strokeStyle = "white";
                ctx.fillStyle = "green";
                if (this.grid[row][column] == 1)
                    ctx.strokeStyle = "red";
                if (this.grid[row][column] == 2)
                    ctx.fillRect(column * scalar * ((1.025-(1.1 - 1)) * 1.25) - (column), row * scalar * ((1.025-(1.1 - 1)) * 1.25) - (row), scalar, scalar);
                ctx.strokeRect(column * scalar * ((1.025-(1.1 - 1)) * 1.25) - (column), row * scalar * ((1.025-(1.1 - 1)) * 1.25) - (row), scalar, scalar);
            }
        }

        // let scalar = ;
        // for (let row = 0; row < this.grid.length; row++) {
        //     for (let column = 0; column < this.grid[0].length; column++) {
        //         ctx.strokeRect(row * scalar, column * scalar, 10, 10);
        //     }
        // }

        // let scalar = screenHeight / this.grid.length;
       
        // ctx.fillStyle = "#fff";
        // for (let x = 0; x < this.grid.length; x++)
        //     ctx.fillRect(0, x * scalar, screenWidth, 5);

        // ctx.fillStyle = "#fff";
        // ctx.fillRect(0, 20 * scalar - 5, screenWidth, 5);
    
        // scalar = screenWidth / this.grid[0].length;
        
        // ctx.fillStyle = "#fff";
        // for (let y = 0; y < this.grid[0].length; y++)
        //     ctx.fillRect(y * scalar, 0, 5, screenHeight);
    
        // ctx.fillStyle = "#fff";
        // ctx.fillRect(10 * scalar - 5, 0, 5, screenHeight);

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
        console.log("frame: " + this.frame);
        window.requestAnimationFrame(this.loop.bind(this));

    }

}