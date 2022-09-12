const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
const fs = require ('fs');
// TODO: CODE GOES HERE

const teamMembers = [];

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
    ])
}