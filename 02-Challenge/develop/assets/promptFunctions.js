function addDepartment() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'department',
            message: 'Input New Department',
        },
    ]);
}
