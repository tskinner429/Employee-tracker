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
                    name: "create department",
                    value: "create_department"
                },
                {
                    name: "view all roles",
                    value: "view_roles"
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

            case "create_department": 
            createDepartment();
            break;

            case "view_roles": 
            viewAllRoles();
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

 function createDepartment() {
    inquirer.prompt([
      {
        name: "name",
        message: "give the name of the department that you want to create"
      }
    ])
      .then(res => {
        let name = res;
        db.createNewDepartmentInDb(name)
          .then(() => console.log(`Added ${name.name} to the database`))
          .then(() => mainMenu())
      })
  }
  

 function viewAllRoles() {
    db.getAllRolesFromDb()
    .then(([Roles]) => {
        console.log("\n");
        console.table(Roles);
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

