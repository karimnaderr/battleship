const gameboardFactory = require('../src/factories/gameboard');
const shipFactory = require('../src/factories/ship');

test('place ship at a specific coordinate',()=>{
    const gameboard = gameboardFactory();
    const ship = shipFactory(3);
    gameboard.placeShip(ship, [[0, 0]]);
    expect(gameboard.getShipAt([0, 0])).toBe(ship);
})

test('records a hit on a ship at the given coordinate', () => {
    const gameboard = gameboardFactory();
    const ship = shipFactory(3);
  
    gameboard.placeShip(ship, [[0, 0]]);
    gameboard.receiveAttack([0, 0]);
  
    expect(ship.getHits()).toBe(1);
});

test('records a missed attack when there is no ship at the coordinate', () => {
    const gameboard = gameboardFactory();

    gameboard.receiveAttack([1, 1]);

    expect(gameboard.getMissedShots()).toContainEqual([1, 1]);
});

test('records multiple missed attacks', () => {
    const gameboard = gameboardFactory();

    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([1, 1]);

    expect(gameboard.getMissedShots()).toEqual([[0, 1], [1, 1]]);
});

test('sinks a ship after all its positions are hit', () => {
    const gameboard = gameboardFactory();
    const ship = shipFactory(2);

    gameboard.placeShip(ship, [[0, 0],[0,1]]);
     

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    expect(ship.isSunk()).toBe(true);
});

test('all ships sink when all of them are hit',()=>{
    const gameboard = gameboardFactory();
    const ship1 = shipFactory(2);
    const ship2= shipFactory(3);

    gameboard.placeShip(ship1, [[0, 0],[0,1]]);
    gameboard.placeShip(ship2, [[1,0],[1,1],[1,2]]);

    gameboard.receiveAttack([0,0]);
    gameboard.receiveAttack([0,1]);

    expect(gameboard.isSunkAll()).toBe(false);

    gameboard.receiveAttack('1,0');
    gameboard.receiveAttack('1,1');
    gameboard.receiveAttack('1,2');

    expect(gameboard.isSunkAll()).toBe(true);
})
