const inquirer = require("inquirer");
const db = require("./db/query");


function mainMenu() {
    inquirer.prompt ([
        {
            type: "list",
            name: "choice",
            message: "which database action you want to do",
            choices: [
                {
                    name: "view all departments",
                    value: "view_departments"
                },
                {
                    name: "view all employees",
                    value: "view_employees"
                },
                {
                    name: "quit",
                    value: "quit"
                },
            ]
        }
    ])

    .then(response => {
        let userChoice = response.choice;

        switch(userChoice) {
            case "view_departments": 
            viewAllDepartments();
            break;

            case "view_employees": 
            viewAllEmployees();
            break;

            default:
            quit();
            break;
    }
        }
    )
}

function quit() {
    process.exit();
 }

 function viewAllDepartments() {
        db.getAllDepartmentsFromDb()
        .then(([departments]) => {
            console.log("\n");
            console.table(departments);
        })
        .then(() => mainMenu());
 }

 function viewAllEmployees() {
    db.getAllEmployeesFromDb()
    .then(([employees]) => {
        console.log("\n");
        console.table(employees);
    })
    .then(() => mainMenu());
}
 mainMenu();

