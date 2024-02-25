
// 634 x 919
// Boxes 63 x 63


class Game {

    constructor() {

        this.started = true;
        this.paused = false;
        this.frame = 0;
        this.grid = [
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
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
        this.motionCoordinate = [0, 6]; // y, x

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
                if (!this.paused && this.started) {
                    if (this.grid[row][column] == 1)
                        ctx.strokeStyle = "red";
                    if (this.grid[row][column] == 2) {
                        ctx.fillStyle = "green";
                        ctx.fillRect(column * scalar * ((1.025-(1.1 - 1)) * 1.25) - (column), row * scalar * ((1.025-(1.1 - 1)) * 1.25) - (row), scalar, scalar);
                    }
                }
                ctx.strokeRect(column * scalar * ((1.025-(1.1 - 1)) * 1.25) - (column), row * scalar * ((1.025-(1.1 - 1)) * 1.25) - (row), scalar, scalar);
            }
        }

    }

    translate(yAdd, xAdd) {

        if (this.paused || !this.started) return;
        
        var [y, x] = this.motionCoordinate;
        this.grid[y + yAdd][x + xAdd] = 1;
        this.grid[y][x] = 0;
        this.motionCoordinate = [y + yAdd, x + xAdd];

    }

    loop() {

        this.drawBackground();
        this.drawGrid();
        this.frame++;
        // console.log("frame: " + this.frame);
        window.requestAnimationFrame(this.loop.bind(this));

    }

}