import sqlite3
import csv
import os
from datetime import datetime

import jwt
import requests
from flask import Flask, render_template, redirect, url_for, g, request, flash, session, send_from_directory, jsonify
from flask import Flask, Response, render_template, redirect, url_for, g, request, flash, session, send_from_directory, json
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename
from flask_cors import CORS

database = 'trip.db'



dict = {'hello':'2', 'world':'1'}

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
CORS(app)


def encode_auth_token(self, user_id):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(
            payload,
            app.config.get('SECRET_KEY'),
            algorithm='HS256'
        )
    except Exception as e:
        return e

def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'))
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'


@app.route('/')
def index():
    return dict


@app.route('/login', methods=['post'])
def login():
    if request.method == 'POST':
        res = request.json
        username = res["username"]
        password = res['password']
        g.db = sqlite3.connect(database)
        correct_password = g.db.execute("SELECT password FROM user WHERE username = ?", (username, )).fetchone()
        if correct_password == None:
            return jsonify({"message":"The user isn't registered yet!"}, 401)
        elif check_password_hash(correct_password[0], password):
            session['user_id'] = username
            return redirect(url_for('index')), 200
        else:
            print(correct_password, password)
            return "Password incorrect", 401
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
            return jsonify({"message":"success"},200)
        except Exception as e:
            print(e)
            return "2", 200
    return redirect(url_for('register')),200



@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login')), 200

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


@app.route('/preference', methods = ['post', 'get'])
def preference():
    if not check_login():
        return redirect(url_for('login'))
    category = {}
    g.db = sqlite3.connect(database)
    results = g.db.execute('SELECT category, description FROM category' ).fetchall()
    for row in results:
        category[row[0]] = row[1]
    if request.method == 'POST':
        try:
            username = session.get('user_id')
            for item in category:
                print(request.form[item])
                score = request.form[item]
                g.db.execute('INSERT INTO preference VALUES (?, ?, ?)', (username, item, score, ))
                g.db.commit()
            return 'update preference successfully!', 200
            
        except Exception as e:
            print(e)
            return 'error'
    return jsonify(category), 200



@app.route('/search-friends')
def search_friends():
    res = request.json
    user = res["username"]
    g.db = sqlite3.connect(database)
    results = g.db.execute('SELECT username FROM user WHERE username <> ?', (user, )).fetchall()
    users = []
    for user in results:
        users.append(user)
    return jsonify(results), 200


@app.route('/')


@app.route('/friends')
def friends():
    res = request.json
    user = res["name"]
    g.db = sqlite3.connect(database)
    results = g.db.execute("SELECT user1 AS friend FROM friends WHERE user2 = ? UNION SELECT user2 AS friend FROM friends WHERE user1 = ?;", (user, user,)).fetchall()
    return jsonify(results), 200


@app.route('/result')
def result():
    return 'hello'


#def weighting():
    


def check_login():
    user_id = session.get('user_id')
    return user_id != None


if __name__ == '__main__':
    app.run(debug = True)




