const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const inquirer = require ('inquirer');
const fs = require ('fs');

// TODO: CODE GOES HERE
managerInfo();
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
        if (response.jobRole === 'Intern') {
            internInfo();
        } else if (response.jobRole === 'Engineer'){
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
            message: 'Enter Name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter Email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter School?'
        }
    ]).then(function (response) {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        teamMembers.push(intern);
        completeForm();
    });
}

//next i'm going to write a function to generate the html page
//I put the html page elsewhere to have cleaner code so that I can organize my work better.
//I gave up because I couldn't get the variables in the separate page to respond as defined.
function generateHtml() {
    const newArr = [];
 
     const htmlFormat = `<!DOCTYPE html>
     <html lang="en">
     
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team Profile</title>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
             integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
             <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
     </head>
     
     <body class="row">
     
         <header class="jumbotron text-center bg-primary text-white font-weight-bold col-12">
             <h1 class="display-4">Team Profile</h1>
         </header>
     
         <main class="container justify-content-center row col-12">`;
     newArr.push(htmlFormat);
 
     for (let member of teamMembers) {
         let htmlMember = '';
         console.log(member)
         if (member.role === 'manager') {
             htmlMember = `
         <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
             <div class="bg-success">
                 <h5 class="card-title ml-4 mt-3 mb-3 text-white">${member.getName()}</h5>
                 <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-mug-hot"></i> Manager</h6>
             </div>
             <div class="card-body bg-light">
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">Id: ${member.getId()}</li>
                     <li class="list-group-item"> Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                     <li class="list-group-item">Office number: ${member.getOffice()}</li>
                 </ul>
             </div>
         </div>`
         } else if (member.role === 'Intern') {
             htmlMember = `
             <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
             <div class="bg-success">
                 <h5 class="card-title ml-4 mt-3 mb-3 text-white">${member.getName()}</h5>
                 <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-user-graduate"></i>  Intern</h6>
             </div>
             <div class="card-body bg-light">
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">Id: ${member.getId()}</li>
                     <li class="list-group-item"> Email: <a href="mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                     <li class="list-group-item">School: ${member.getSchool()}</li>
                 </ul>
             </div>
         </div>`
         } else {
             htmlMember = `
             <div class="card col-3 pl-0 pr-0 mt-4 mx-3 shadow bg-body rounded" style="min-width:18rem; max-width:18rem">
             <div class="bg-success">
                 <h5 class="card-title ml-4 mt-3 mb-3 text-white">${member.getName()}</h5>
                 <h6 class="card-subtitle mb-3 ml-4 text-white"><i class="fa fa-glasses"></i> Engineer</h6>
             </div>
             <div class="card-body bg-light">
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">Id: ${member.getId()}</li>
                     <li class="list-group-item"> Email: <a href="mailto: ${member.getEmail()}">${member.getEmail()}</a></li>
                     <li class="list-group-item">GitHub: <a href=https://github.com/${member.retrieveGit()}>${member.retrieveGit()}</a></li>
                 </ul>
             </div>
         </div>`;
         }
         newArr.push(htmlMember);
     }
 
     const htmlEnd = `</main>
         </body>
     </html>`;
     newArr.push(htmlEnd);
 
     return newArr.join('');
 };
function renderHtml() {
    fs.writeFile('team.html', generateHtml(), 'utf-8', (err) => {
        err ? console.log(err) : console.log('File successfully created! Great Work.')
    });
}