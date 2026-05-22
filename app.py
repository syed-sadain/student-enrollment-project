from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Pass@123",
    database="school_db"
)

cursor = db.cursor(dictionary=True)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get/<roll>", methods=["GET"])
def get_student(roll):
    cursor.execute("SELECT * FROM student WHERE roll_no=%s", (roll,))
    data = cursor.fetchone()
    return jsonify(data)

@app.route("/save", methods=["POST"])
def save_student():
    data = request.json
    sql = "INSERT INTO student VALUES (%s,%s,%s,%s,%s,%s)"
    val = (
        data["roll_no"],
        data["full_name"],
        data["class"],
        data["birth_date"],
        data["address"],
        data["enrollment_date"]
    )
    cursor.execute(sql, val)
    db.commit()
    return jsonify({"status":"saved"})

@app.route("/update/<roll>", methods=["PUT"])
def update_student(roll):
    data = request.json
    sql = "UPDATE student SET full_name=%s,class=%s,birth_date=%s,address=%s,enrollment_date=%s WHERE roll_no=%s"
    val = (
        data["full_name"],
        data["class"],
        data["birth_date"],
        data["address"],
        data["enrollment_date"],
        roll
    )
    cursor.execute(sql, val)
    db.commit()
    return jsonify({"status":"updated"})

if __name__ == "__main__":
    app.run(debug=True)
