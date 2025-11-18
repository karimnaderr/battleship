const ship = require("./ship");

function gameboard(){
    const board = {};
    const missedShots = [];

    function placeShip(ship, coordinatesArray) {
        coordinatesArray.forEach(coord => {
            board[coord] = ship;
        });
    }

    function getShipAt(coordinates){
        return board[coordinates];
    }

    function receiveAttack(coordinates){
        const ship = getShipAt(coordinates);
        if(ship){
            ship.hit();
        }else{
            missedShots.push(coordinates);
        }
    }

    function getMissedShots(){
        return missedShots;
    }

    function isSunkAll(){
        const ships = new Set(Object.values(board));
        return [...ships].every(ship => ship.isSunk());
    }
    return {placeShip,getShipAt,receiveAttack,getMissedShots,isSunkAll};
}

module.exports = gameboard;