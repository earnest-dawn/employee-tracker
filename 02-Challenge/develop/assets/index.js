const inquirer = require('inquirer');
const network = require('./network');
const promptFunctions = require('./promptFunctions');

// import inquirer from 'inquirer';
// import sql from 'mysql2';
// import network from './network';
// import promptFunctions from './promptFunctions';

// function to display initial options on startup
function start() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    name: 'View all departments',
                    value: 'viewDepartments'
                    name: 'View all roles',
                    value: 'viewRoles'
                    name: 'View all employees',
                    value: 'viewEmployees'
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ],
            },
        ])
        .then((data) => {
            const selectedOp = data.option;

            switch (selectedOp) {
                case 'View all departments':
                    break;
                case 'View all roles':
                    break;
                case 'View all employees':
                    break;
                case 'Add a role':
                    break;
                case 'Add an employee':
                    break;
                case 'Update an employee role':
                    break;
                    // case '':
                    //     break;
                    return;
            }
        });
}
start();

// function to handle viewing employees
