const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('tests to see if the function will add the content from the prompt to the html page', () => {
    const gitHubValue = 'github.com';
    const newEng = new Engineer ('name', 'id', 'email', gitHubValue)
    expect(newEng.retrieveGit()).toBe(gitHubValue)
})
});

//test code