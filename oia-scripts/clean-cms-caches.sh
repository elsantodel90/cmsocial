#!/bin/bash

echo "**********"
echo "Los mensajes sobre _temp son normales, ese es el chiquitin que queda sin borrar"
echo "**********"
for x in /var/local/cache/cms/*/*
do
	rm "$x";
done

