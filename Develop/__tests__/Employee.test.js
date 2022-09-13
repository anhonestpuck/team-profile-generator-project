const Employee = require("../lib/Employee");

describe('function to create an object in order to place it into an html page', () => {
    const updatedEmployee = new Employee();
    expect(typeof(updatedEmployee)).toBe('object')

});

describe('can update object with values'), () => {
    const name = 'Jason'
    const newEmp = new Employee(name);
    expect(newEmp.name).tobe(name);
}
