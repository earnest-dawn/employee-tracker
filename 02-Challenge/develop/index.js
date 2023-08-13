const inquirer = require('inquirer');
const network = require('./assets/network');
const promptFunctions = require('./assets/promptFunctions');
const db = require("./db");
const { prompt } = require("inquirer");

start();

// import inquirer from 'inquirer';
// import sql from 'mysql2';
// import network from './network';
// import promptFunctions from './promptFunctions';

// function to display initial options on startup
function start() {
            prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    {name: 'View all departments',
                    value: 'viewDepartments'},
                   { name: 'View all roles',
                    value: 'viewRoles'},
                   { name: 'View all employees',
                    value: 'viewEmployees'}.
                    {name:'Add a department',
                    value: "addDepartment"},
                   {name: 'Add a role',
                   value: 'addRole'},
                  { name: 'Add an employee',
                   value: 'addEmployee'},
                   { name: 'Update an employee role',
                    value: 'updateEmployeeRole'},
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
// start();

// function to handle viewing employees
