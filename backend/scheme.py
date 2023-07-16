import sqlite3
import random
conn = sqlite3.connect('trip.db')
script = (
    """
    DROP TABLE IF EXISTS user;
    CREATE TABLE user(
        username TEXT PRIMARY KEY, 
        password TEXT NOT NULL); 
    
    DROP TABLE IF EXISTS category;
    CREATE TABLE category(
        category TEXT PRIMARY KEY, 
        description TEXT
    );

    DROP TABLE IF EXISTS activity; 
    CREATE TABLE activity(
        activity_id INTEGER PRIMARY KEY,     
        activity_name TEXT,
        description TEXT,
        budget INTERGER,
        location TEXT,
        time FLOAT, 
        category TEXT,
        weather_dependency BOOL, 
        weather TEXT,
        FOREIGN KEY (category) REFERENCES category(category)
        );



    DROP TABLE IF EXISTS preference; 
    CREATE TABLE preference(
        username TEXT NOT NULL,     
        category INTEGER NOT NULL,
        weighting INTEGER NOT NULL CHECK ((weighting <= 10) and (weighting >= 0)),
        FOREIGN KEY (username) REFERENCES user(username));
    """
)
conn.executescript(script)
conn.commit()

category = dict()
category['outdoor'] = 'description for outdoor activity'
category['music'] = 'description for music activity'
category['historical'] = 'description for historical activity'
category['academic'] = 'description for academic activity'
category['water'] = 'description for water activity'
category['film'] = 'description for film activity'


for item in category:
    conn.execute("INSERT INTO category VALUES (?, ?)", (item, category[item],))
    conn.commit()

list = []
with open('text.txt') as file:
    lines = file.readlines()
    for line in lines:
        list.append(line)

for i in range(len(list)):
    budget = random.randint(0, 1000)
    time = random.randint(1, 5)
    conn.execute('INSERT INTO activity VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', (i, list[i], 'placeholder', budget, 'location placeholder', time, 'outdoor', False, None, ))
    conn.commit()

conn.close()