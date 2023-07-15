import sqlite3
conn = sqlite3.connect('attendance.db')
script = (
    """
    DROP TABLE IF EXISTS user;
    CREATE TABLE user(
        username TEXT PRIMARY KEY, 
        password TEXT NOT NULL); 

    DROP TABLE IF EXISTS activity; 
    CREATE TABLE activity(
        activity_id INTEGER UNIQUE NOT NULL,     
        activity_name TEXT,
        description TEXT,


    DROP TABLE IF EXISTS preference; 
    CREATE TABLE preference(
        username INTEGER UNIQUE NOT NULL,     
        status TEXT,
        comment TEXT,
        FOREIGN KEY (student_number) REFERENCES student(student_number));
    DROP TABLE IF EXISTS student;
    CREATE TABLE student(
        student_number INTEGER PRIMARY KEY CHECK(student_number >= 10000 and student_number <= 99999),
        year INTEGER NOT NULL CHECK (year >= 2000), 
        term INTEGER NOT NULL CHECK(term >= 1 and term <= 4), 
        act_code INTEGER NOT NULL, 
        activity TEXT NOT NULL, 
        level INTEGER NOT NULL CHECK(level >= 1 and level <= 12), 
        surname TEXT NOT NULL, 
        given_name TEXT NOT NULL, 
        year_group INTEGER NOT NULL CHECK(year_group >= 1 and year_group <= 12),
        tutor_group TEXT NOT NULL, 
        house TEXT NOT NULL);
    """
)
conn.executescript(script)
conn.commit()
conn.close()