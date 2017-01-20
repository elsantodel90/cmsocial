#!/usr/bin/python

from oia_db_connection import performDatabaseOperation
import sys

headers = ["id","level", "first_name", "last_name", "username", "email", "escuela", "ciudad", "provincia"]

def main():
    if len(sys.argv) < 2:
        sortingIndex = 0
    else:
        sortingIndex = headers.index(sys.argv[1])
    def operation(conn):
        with conn.cursor() as cur:
            cur.execute("SELECT social_users.id, access_level, first_name, last_name, username, email, oiaescuela, oiaciudad, oiaprovincia FROM social_users, users WHERE social_users.id = users.id;")
            allRecords = map(tuple, cur)
            allRecords.sort(key=(lambda x : x[sortingIndex]))
            if allRecords:
                n = len(allRecords[0])
                recordFormat = "".join("{{{0}:>{1}}}".format(i, 2 + max(len(headers[i]), max(len("{0}".format(r[i])) for r in allRecords))) for i in range(n))
                #recordFormat = "{0:>5}{1:>13}{2:>25}{3:>25}{4:>25}{5:>35}{6:>50}{7:>40}{8:>55}"
                print recordFormat.format(*headers)
                for record in allRecords:
                    print recordFormat.format(*record)
    
    performDatabaseOperation(operation)

if __name__ == "__main__":
    main()
