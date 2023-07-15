import sqlite3
import csv
import os
from flask import Flask, Response, render_template, redirect, url_for, g, request, flash, session, send_from_directory, json
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

database = 'trip.db'



dict = {'hello':'2', 'world':'1'}

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'



@app.route('/')
def index():
    return dict


@app.route('/login', methods=['post'])
def login():
    if request.method == 'POST':
        res = request.json
        username = res["username"]
        password = res['password']
        # g.db = sqlite3.connect(database)
        # correct_password = g.db.execute("SELECT password FROM user WHERE username = ?", (username, )).fetchone()
        # if correct_password == None:
        #     flash("The user isn't registered yet!")
        # elif check_password_hash(correct_password[0], password):
        #     flash("Login sucessfully!")
        #     session['user_id'] = username
        #     return redirect(url_for('index'))
        # else:
        #     print(correct_password, password)
        #     flash("Password incorrect")
    return "success", 200



@app.route('/register', methods = ['post'])
def register():
    if request.method == 'POST':
        try:
            res = request.json
            username = res["username"]
            password = res['password']
            g.db = sqlite3.connect(database)
            g.db.execute('INSERT INTO user (username, password) VALUES (?, ?)', (username, generate_password_hash(password)))
            g.db.commit()
            return redirect(url_for('login'))
        except Exception as e:
            print(e)
            return redirect(url_for('register'))
    return render_template('register.html')



@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))


def check_login():
    user_id = session.get('user_id')
    return user_id != None


if __name__ == '__main__':
    app.run(debug = True)




