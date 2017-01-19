#!/usr/bin/python

from oia_db_connection import performDatabaseOperation

def main():
	def operation(conn):
		with conn.cursor() as cur:
			cur.execute("SELECT social_users.id, access_level, first_name, last_name, username, email FROM social_users, users WHERE social_users.id = users.id;")
			recordFormat = "{0:>5}{1:>13}{2:>25}{3:>25}{4:>25}{5:>35}"
			print recordFormat.format("id","access_level", "first_name", "last_name", "username", "email")
			for record in cur:
				print recordFormat.format(*record)
	
	performDatabaseOperation(operation)

if __name__ == "__main__":
	main()
