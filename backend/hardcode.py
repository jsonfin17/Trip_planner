import sqlite3

database = 'trip.db'
conn = sqlite3.connect('trip.db')

# conn.execute("INSERT INTO user VALUES (?, ?)", ("Joseph Hee","heejljoseph@gmail.com",))
# conn.commit()
conn.execute("INSERT INTO user VALUES (?, ?)", ("Tom","dummy@gmail.com",))
conn.commit()
conn.execute("INSERT INTO user VALUES (?, ?)", ("Barry","dummy2@gmail.com",))
conn.commit()
conn.execute("INSERT INTO user VALUES (?, ?)", ("Sarah","dummy3@gmail.com",))
conn.commit()
conn.execute("INSERT INTO friends VALUES (?, ?)", ("Joseph Hee","Tom",))
             
conn.commit()
