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
       
