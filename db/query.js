const connection = require("./connection");

class DBAccess {
    constructor(connection) {
      this.connection = connection;
    }

    getAllEmployeesFromDb() {
        return this.connection.promise().query(
          "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
      }
    
      getAllDepartmentsFromDb() {
        return this.connection.promise().query(
          "SELECT department.id, department.name From department;"
        );
      }

      getAllRolesFromDb() {
        return this.connection.promise().query(
          "SELECT role.id, role.title, department.name AS Department_name, role.salary From role left join department on role.department_id = department.id;"
        );
      }
      
      createNewDepartmentInDb(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
      }
};



module.exports = new DBAccess(connection);

