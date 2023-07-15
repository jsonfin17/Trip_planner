import sqlite3
conn = sqlite3.connect('trip.db')
script = (
    """
    DROP TABLE IF EXISTS user;
    CREATE TABLE user(
        username TEXT PRIMARY KEY, 
        password TEXT NOT NULL); 

    DROP TABLE IF EXISTS activity; 
    CREATE TABLE activity(
        activity_id INTEGER PRIMARY KEY,     
        activity_name TEXT,
        description TEXT,
        budget INTERGER,
        location TEXT);


    DROP TABLE IF EXISTS preference; 
    CREATE TABLE preference(
        username TEXT NOT NULL,     
        activity_id INTEGER NOT NULL,
        weighting INTEGER NOT NULL CHECK ((weighting <= 100) and (weighting >= 0)),
        FOREIGN KEY (username) REFERENCES user(username),
        FOREIGN KEY (activity_id) REFERENCES activity(activity_id));
    """
)
conn.executescript(script)
conn.commit()
conn.close()