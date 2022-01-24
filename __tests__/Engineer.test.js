const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Xavyr', 24, 'xavyr24@gmail.com', 'Exlautis');

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Xavyr', 24, 'xavyr24@gmail.com', 'Exlautis');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employee role', () => {
    const engineer = new Engineer('Xavyr', 24, 'xavyr24@gmail.com', 'Exlautis');

    expect(engineer.getRole()).toEqual('Engineer');
});