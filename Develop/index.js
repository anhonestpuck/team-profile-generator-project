const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
const fs = require ('fs');
// TODO: CODE GOES HERE

const teamMembers = [];
//started with the prompts
function managerInfo () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: 'What is the team manager name?'
        },
        {
            type: 'input',
            name: 'mgrId',
            message: 'Please enter your ID number'
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'please enter your office number'
        }
    ]).then((response => {
        const mgr = new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOffice);
        teamMembers.push(mgr);
        completeForm();
    }));
};

function completeForm(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'jobRole',
            message: 'What is your role at this company?',
            choices: ['Engineer', 'Intern', 'Already finished']
        }
    ]).then(function (response) {
        if (response.position === 'Intern') {
            internInfo();
        } else if (response.position === 'Engineer'){
            engineerInfo();
        } else {
            renderHtml();
        }
    });
}
function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter Engineer name'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Enter Email'
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter Github'
        }
    ]).then(function (response) {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
        teamMembers.push(engineer);
        completeForm();
    });
}

function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the interns ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?'
        }
    ]).then(function (response) {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        teamMembers.push(intern);
        completeForm();
    });
}
//next i'm going to write a function to generate the html page