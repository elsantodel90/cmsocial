#!/usr/bin/python

from oia_db_connection import performDatabaseOperation
import sys

def listContests():
    def operation(conn):
        with conn.cursor() as cur:
            cur.execute("SELECT id, top_left_name, title FROM social_contests")
            rowFormat = "{0:>5}{1:>30}{2:>100}"
            print rowFormat.format("id", "homename" , "title")
            for record in cur:
                print rowFormat.format(*record)
            
    performDatabaseOperation(operation)
    
def setValues(contestId, homename, title):
    def operation(conn):
        with conn.cursor() as cur:
            cur.execute("UPDATE social_contests SET top_left_name=%s, title=%s WHERE id=%s", (homename, title, contestId))
            
    performDatabaseOperation(operation)
    
def main():
    if len(sys.argv) == 7 and sys.argv[1] == '-id' and sys.argv[3] == '-homename' and sys.argv[5] == '-title':
        setValues(int(sys.argv[2]), sys.argv[4], sys.argv[6])
    elif len(sys.argv) == 1:
        listContests()
    else:
        print >> sys.stderr, "Uso para listar los contests:"
        print >> sys.stderr, sys.argv[0]
        print >> sys.stderr, "Uso para fijar valores:"
        print >> sys.stderr, sys.argv[0], "-id <contestId> -homename <newHomename> -title <newTitle>"
        exit()

if __name__ == "__main__":
    main()
