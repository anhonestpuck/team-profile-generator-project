const Intern = require("../lib/Intern");

describe("Intern is a page to grab functions to make sure that the values are determined for entering them into the html", () => {
    const universityAttended = 'github.com';
    const newEng = new Engineer ('name', 'id', 'email', universityAttended)
    expect(newEng.retrieveGit()).toBe(universityAttended)
});
