import psycopg2

def performDatabaseOperation(workerFunction):
	conn = None
	try:
		with psycopg2.connect(dbname="database", user="oiajuez", password="oiapass", host="localhost") as conn:
			workerFunction(conn)
	finally:
		if conn is not None:
			conn.close()
