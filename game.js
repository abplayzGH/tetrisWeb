
// 634 x 919
// Boxes 63 x 63


class Game {

    constructor() {

        this.started = true;
        this.paused = false;
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
        this.piece;

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
                if (true) {
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

    translate(piece, yAdd, xAdd) {

        if (this.paused || !this.started) return piece.location;
        
        const remap = [];
        for (const pair of piece.location) {
            var [y, x] = pair;
            if (x + xAdd > 9 || x + xAdd < 0) {
                console.log("bounds: x");
                return piece.location;
            }
            if (y + yAdd > 19) {
                this.piece.place();
                console.log("placed: y bounds");
                return piece.location;
            }
            if (this.grid[y + yAdd][x + xAdd] > 1) {
                this.piece.place();
                console.log("placed: touching solid");
                return piece.location;
            }
            this.grid[y][x] = 0;
            remap.push([y + yAdd, x + xAdd])
            for (const pair2 of remap) { // maintaining shape color
                this.grid[pair2[0]][pair2[1]] = 1;
            }
        }
        return remap;

        // var [y, x] = piece.location;
        // this.grid[y + yAdd][x + xAdd] = 1;
        // this.grid[y][x] = 0;
        // this.motionCoordinate = [y + yAdd, x + xAdd];

    }

    over() {

        this.paused = true;
        this.started = false;
        console.log("game over");

    }

    loop() {

        this.drawBackground();
        this.drawGrid();
        if (this.piece == null && this.frame > 1) {
            this.piece = generatePiece();
            console.log("piece added");
        }
        if (this.piece != null && this.frame % 75 == 0) {
            this.piece.location = this.translate(this.piece, 1, 0);
        }
        this.frame++;
        // console.log("frame: " + this.frame);
        window.requestAnimationFrame(this.loop.bind(this));

    }

}