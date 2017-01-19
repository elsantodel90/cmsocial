#!/usr/bin/python

from oia_db_connection import performDatabaseOperation


from oia_db_connection import performDatabaseOperation
import sys

def setAccessLevel(userId, newAccessLevel):
	def operation(conn):
		with conn.cursor() as cur:
			cur.execute("UPDATE social_users SET access_level=%s WHERE id=%s", (newAccessLevel, userId))
			
	performDatabaseOperation(operation)
	
def main():
	if len(sys.argv) != 3:
		print >> sys.stderr, "Uso:"
		print >> sys.stderr, sys.argv[0], "userId", "newAccessLevel"
		exit()
	setAccessLevel(sys.argv[1], sys.argv[2])
	

if __name__ == "__main__":
	main()
