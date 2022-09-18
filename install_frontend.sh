#!/bin/bash
if (( $EUID != 0 )); then
	    echo "Please run as root"
	    exit
fi
	
cd front
npm install
cp -a public/. /usr/share/nginx/html
