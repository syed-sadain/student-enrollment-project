
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE student (
    roll_no VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100),
    class VARCHAR(20),
    birth_date DATE,
    address VARCHAR(255),
    enrollment_date DATE
);
