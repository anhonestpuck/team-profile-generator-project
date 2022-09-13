const Intern = require("../lib/Intern");

describe("Intern is a page to grab functions to make sure that the values are determined for entering them into the html", () => {
    const schoolValue = 'github.com';
    const newEng = new Engineer ('name', 'id', 'email', schoolValue)
    expect(newEng.retrieveGit()).toBe(schoolValue)
});
