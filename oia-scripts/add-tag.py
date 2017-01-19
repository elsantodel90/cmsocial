#!/usr/bin/python

import psycopg2
import sys

def printHelp():
	print >> sys.stderr, "Uso:"
	print >> sys.stderr, sys.argv[0], "tagname", "tagdescription"

def main():
	if len(sys.argv) != 3:
		printHelp()
		exit()
	tagname = sys.argv[1]
	tagdescription = sys.argv[2]
	conn = None
	try:
		with psycopg2.connect(dbname="database", user="oiajuez", password="oiapass", host="localhost") as conn:
			with conn.cursor() as cur:
				cur.execute("INSERT INTO tags (name, hidden, description) VALUES (%s,%s,%s);", (tagname,False,tagdescription))
	finally:
		if conn is not None:
			conn.close()

if __name__ == "__main__":
	main()
