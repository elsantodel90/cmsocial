#!/bin/bash

# OIA-JUEZ BUILD SCRIPT [Assumes all dependencies are already downloaded]:
# Appropriate to update existing instalation after repository (simple) changes (translation? etc)

if [[ "oia-scripts" != "${PWD##*/}" ]]
then
    echo SE DEBE EJECUTAR "$0" DIRECTAMENTE DESDE EL DIRECTORIO oia-scripts QUE LO CONTIENE
fi

cd ..    
make
sudo python2 ./setup.py install
sudo rm -f /usr/local/etc/cmsocial.ini
sudo ln -s "$(pwd)"/config/cmsocial.ini /usr/local/etc/cmsocial.ini
