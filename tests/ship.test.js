const shipFactory = require('../src/factories/ship');

test('ship has length',()=>{
    const ship = shipFactory(3);
    expect(ship.getLength()).toBe(3);
})

test('ship can take a hit',()=>{
    const ship = shipFactory(3);
    ship.hit()
    expect(ship.getHits()).toBe(1);
})

test('ship hit() increments hits each time', () => {
    const ship = shipFactory(3);
    ship.hit();
    ship.hit();
    expect(ship.getHits()).toBe(2);
});

test('ship is sunk when hits equal length', () => {
    const ship = shipFactory(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
