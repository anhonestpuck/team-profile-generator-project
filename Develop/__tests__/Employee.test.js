const Employee = require("../lib/Employee");

describe('Employee', () => {
    it('tests to see if the function will add the content from the prompt to the html page', () => {
        const nameValue = 'Johnny Appleseed';
        const newEmp = new Employee (nameValue, 'blue', 'orange', 'cactus')
        expect(newEmp.getName()).toBe(nameValue)
    })

});