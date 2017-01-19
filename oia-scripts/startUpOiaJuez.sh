#!/bin/bash

if [[ "oia-scripts" != "${PWD##*/}" ]]
then
    echo SE DEBE EJECUTAR "$0" DIRECTAMENTE DESDE EL DIRECTORIO oia-scripts QUE LO CONTIENE
    exit
fi

trap "exit" INT # If user manually uses CTRL-C, breaks the whole script
while true
do
	echo 1 | cmsResourceService -a # echo 1 means to select contest id 1
	mkdir -p oiaJuezLogs
	cmsLogService >>oiaJuezLogs/OIA-SERVER-RESTARTED-"$(date --iso-8601=seconds)".log
done
