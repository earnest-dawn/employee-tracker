DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments(
departmentId INT AUTO_INCREMENT PRIMARY KEY,
departmentName VARCHAR(255)
);

CREATE TABLE roles (
roleID INT AUTO_INCREMENT PRIMARY KEY,
jobTitle VARCHAR(255),
salary DECIMAL,
departmentID INT,
FOREIGN KEY (departmentId) REFERENCES departments(departmentId)
);

CREATE TABLE employeeData (
  employeeIds INT AUTO_INCREMENT PRIMARY KEY,
  firstNames VARCHAR(200), 
  lastNames VARCHAR(200), 
  jobTitle VARCHAR(255),
  departmentName VARCHAR(255),
  salary DECIMAL,
  manager VARCHAR(200),
  FOREIGN KEY (jobTitle) REFERENCES roles(jobTitle),
  FOREIGN KEY (departmentName) REFERENCES departments(departmentNames)
);

