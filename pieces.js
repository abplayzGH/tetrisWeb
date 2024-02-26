class FallingPiece {
    
    constructor(shape) {
 
        this.location = shape;
 
        for (const pair of shape) {
            if (game.grid[pair[0]][pair[1]]) {
                game.over();
                return;
            }
            game.grid[pair[0]][pair[1]] = 1;
        }
 
    }

    place() {
        
        for (let row = 0; row < game.grid.length; row++) {
            for (let column = 0; column < game.grid[0].length; column++) {
                if (game.grid[row][column] == 1) {
                    game.grid[row][column] = 0;
                }
            }
        }

        for (const pair of this.location) {
            game.grid[pair[0]][pair[1]] = 2;
            if (pair[0] - 1 < 0) {
                game.over();
            }
        }

        if (game.started)
            game.piece = generatePiece();
 
    }

}


function generatePiece() {

    return new FallingPiece([[1, 4], [1, 5], [0, 4], [0, 5]]);

}