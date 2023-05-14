USE employee_db;

INSERT INTO department (name)
VALUES ("HR"),
       ("Marketing"),
       ("IT"),
       ("Development"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 1000000, 5),
       ("VP HR", 70000, 1),
       ("VP Marketing", 100000, 2),
       ("VP IT", 100000, 3),
       ("VP Development", 100000,4),
       ("VP Sales", 100000, 5),
       ("Software developer", 90000, 4),
       ("IT Lead", 90000, 3),
       ("Marketing Lead", 90000, 2),
       ("HR partner", 90000, 1);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Jones", 1, NULL),
       ("Christopher", "Hutchins", 2, 1),
       ("James", "Smith", 3, 1),
       ("Michael", "Brown", 4, 1),
       ("Sam", "King", 5, 1),
       ("Kate", "Conway", 6, 1),
       ("Kristen", "Shultz", 7, 5),
       ("Victor", "Juarez", 8, 4),
       ("Jesse", "Pinkman", 9, 3),
       ("Walter", "White", 10, 2);
       