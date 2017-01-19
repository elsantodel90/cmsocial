#!/usr/bin/python

from oia_db_connection import performDatabaseOperation
import sys

def insertTag(tagName, tagDescription):
	def operation(conn):
		with conn.cursor() as cur:
			cur.execute("INSERT INTO tags (name, hidden, description) VALUES (%s,%s,%s);", (tagName,False,tagDescription))
			
	performDatabaseOperation(operation)
	
def main():
	if len(sys.argv) != 3:
		print >> sys.stderr, "Uso:"
		print >> sys.stderr, sys.argv[0], "tagname", "tagdescription"
		exit()
	insertTag(sys.argv[1], sys.argv[2])
	

if __name__ == "__main__":
	main()
