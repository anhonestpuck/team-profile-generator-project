const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should ensure a value is taken in for placement in the html', () => {
        const mgrOffice = 3;
        const mgr = new Manager ('blue', 'carrot', 'happytimes', mgrOffice);
        expect(mgr.getOffice()).toBe(mgrOffice)
    } )
})