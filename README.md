# 📘 Student Enrollment Form - Micro Project
📌 Project Overview

This is a Student Enrollment System built using HTML, CSS, JavaScript, Python (Flask), and MySQL.
It allows users to add, view, and update student records based on the primary key (Roll Number).

The project follows CRUD-like logic with Save, Update, and Reset operations.

# 🚀 Features

🎯 Add new student records
🔍 Auto-check Roll Number (Primary Key)
✏️ Update existing student details
💾 Save data into MySQL database
🔄 Reset form to initial state
🚫 Field validation (no empty inputs allowed)
🎨 Clean and responsive UI

# 🧩 Tech Stack

Layer	    Technology
Frontend:	HTML, CSS, Bootstrap, JavaScript
Backend	:   Python Flask
Database:	MySQL
API	REST API: (Flask routes)

# 🗄️ Database Structure

Database: school_db
Table: student
CREATE TABLE student (
    roll_no VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100),
    class VARCHAR(20),
    birth_date DATE,
    address VARCHAR(255),
    enrollment_date DATE
);

# 📋 Form Fields
Field Name	Type	Description
Roll No	Primary Key	Unique student ID
Full Name	Text	Student full name
Class	Text	Student class
Birth Date	Date	Date of birth
Address	Text	Student address
Enrollment Date	Date	Admission date

# ⚙️ Project Workflow

1️⃣ Initial State

Form opens empty
Cursor focused on Roll No
All fields disabled except Roll No

2️⃣ Roll No Entered

Case A: Roll No NOT EXISTS
Enable all fields
Enable Save + Reset
Allow user input
Case B: Roll No EXISTS
Auto-fill student data
Enable Update + Reset
Disable Roll No field

3️⃣ Save Operation

Validates all fields
Inserts record into database
Resets form

4️⃣ Update Operation

Updates existing record
Resets form

5️⃣ Reset Operation

Clears all fields
Returns to initial state

# 🛠️ How to Run the Project

1️⃣ Install dependencies
pip install flask flask-cors mysql-connector-python

2️⃣ Setup MySQL database

Run SQL file:

database.sql

3️⃣ Start backend server

python app.py

4️⃣ Run frontend

Open in browser:

http://127.0.0.1:5000

# 📁 Project Structure
student-enrollment-project/
│
├── app.py
├── database.sql
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
|
|-----README.md

# 🎯 Learning Outcomes

CRUD operations
REST API development using Flask
MySQL database integration
Frontend-backend communication
Form validation logic
Primary key based data handling

# 👨‍💻 Author
# SYED SADAIN

Student Micro Project Submission

# ⭐ Conclusion

This project demonstrates a complete full-stack web application with database integration and dynamic form behavior based on primary key validation.
