const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Xavyr', 24, 'xavyr24@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

test("gets employee's school", () => {
    const intern = new Intern('Xavyr', 24, 'xavyr24@gmail.com', 'UT');

    expect
});

test('gets role of employee', () => {
    const intern = new Intern('Xavyr', 24, 'xavyr24@gmail.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
});