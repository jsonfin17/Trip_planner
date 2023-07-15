import sqlite3
import csv
import os
import requests
from flask import Flask, render_template, redirect, url_for, g, request, flash, session, send_from_directory, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

database = 'trip.db'



dict = {'hello':'2', 'world':'1'}

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'



@app.route('/')
def index():
    return dict['hello']


@app.route('/kdfjkrjljgkjg', methods=['post', 'get'])
def login():
    if check_login():
        return redirect(url_for('index'))
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        g.db = sqlite3.connect(database)
        correct_password = g.db.execute("SELECT password FROM user WHERE username = ?", (username, )).fetchone()
        if correct_password == None:
            flash("The user isn't registered yet!")
        elif check_password_hash(correct_password[0], password):
            flash("Login sucessfully!")
            session['user_id'] = username
            return redirect(url_for('index'))
        else:
            print(correct_password, password)
            flash("Password incorrect")
    return render_template('login.html')



@app.route('/register', methods = ['post', 'get'])
def register():
    if check_login():
        return redirect(url_for('index'))
    if request.method == 'POST':
        try:
            username = request.form['username']
            password = request.form['password']
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

@app.route('/local-events')
def events():
    api_url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&apikey=EbxJQ4zJdpA2AH8Rv6ONYPGfwsHsoKZA'
    #api_key = '	EbxJQ4zJdpA2AH8Rv6ONYPGfwsHsoKZA'  # Replace with your actual Ticketmaster API key

    # Make the request to the Ticketmaster API
    response = requests.get(api_url)
    
    if response.status_code == 200:
        data = response.json()
        aus_events = data.get('_embedded')
        return jsonify(aus_events.get('events'))
    else:
        return jsonify({'error': 'Failed to fetch data from Ticketmaster API.'}), response.status_code


@app.route('/preference')
def preference():
    if request.method == 'POST':
        try:
            username = session.get('user_id')
            g.db = sqlite3.connect(database)
            results = g.db.execute('SELECT activity_name, description FROM activity' ).fetchall()
            for row in results:
                print(row)
            g.db.commit()
            return redirect(url_for('login'))
        except Exception as e:
            print(e)
            return redirect(url_for('register'))
    return render_template('register.html')


def check_login():
    user_id = session.get('user_id')
    return user_id != None


if __name__ == '__main__':
    app.run(debug = True)




