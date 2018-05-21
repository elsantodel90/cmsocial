#!/bin/bash

echo ' (select id from submissions) EXCEPT (select submission_id from submission_results);' | psql -t -U oiajuez -h 127.0.0.1 -d database | sort -n
