const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Xavyr', 24, 'xavyr24@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Xavyr', 24, 'xavyr24@gmail.com');

    expect(manager.getRole()).toEqual('Manager');
});