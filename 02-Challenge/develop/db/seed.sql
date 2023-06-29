USE employee_tracker;
INSERT INTO departments (departmentNames) VALUES
("Marketing Strategy"),
("Digital Marketing"),
("Social Media Marketing"),
("Creative Services"),
("Market Research"),
("Public Relations"),
("Event Marketing"),
("Content Writing"),
("SEO and PPC"),
("Email Marketing");

INSERT INTO roles (jobTitle, salary, departmentId) VALUES
("Marketing Manager", 70000.0, 5),
("Marketing Coordinator", 40000.0, 1),
("Digital Marketing Specialist", 50000.0, 3),
("Social Media Manager", 50000.0, 5),
("Content Writer", 40000.0, 3),
("SEO Specialist", 50000.0, 2),
("PPC Specialist", 50000.0, 2),
("Email Marketing Manager", 60000.0, 5),
("Marketing Analyst", 50000.0, 2),
("Brand Manager", 60000.0, 1),
("Creative Director", 80000.0, 4),
("Graphic Designer", 40000.0, 4),
("Market Research Analyst", 50000.0, 2),
("Public Relations Manager", 60000.0, 4),
("Events Coordinator", 40000.0, 1);




INSERT INTO employeeData (firstNames, lastNames, jobTitle, departmentName, salary, manager)
SELECT e.firstNames, e.lastNames, r.jobTitle, d.departmentNames, r.salary, e.manager
FROM employees e
JOIN roles r ON e.jobTitle = r.jobTitle
JOIN departments d ON r.departmentID = d.departmentId;