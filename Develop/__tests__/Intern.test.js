const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('should ensure a value is taken in for placement in the html', () => {
        const universityAttended = 'UNCC';
        const intern = new Intern ('blue', 'carrot', 'happytimes', universityAttended);
        expect(intern.getSchool()).toBe(universityAttended)
    } )
});
