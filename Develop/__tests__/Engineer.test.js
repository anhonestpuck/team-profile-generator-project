const Engineer = require("../lib/Engineer");

describe("Engineer is a page to grab functions to make sure that the values are determined for entering them into the html", () => {
    const gitHubValue = 'github.com';
    const newEng = new Engineer ('name', 'id', 'email', gitHubValue)
    expect(newEng.retrieveGit()).toBe(gitHubValue)
});

//test code