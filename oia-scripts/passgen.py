#!/usr/bin/python3
import bcrypt
import sys

assert(len(sys.argv) == 2)
pw = sys.argv[1]
pw = pw.encode('utf-8')
payload = bcrypt.hashpw(pw, bcrypt.gensalt())
print("bcrypt:%s" % payload)
