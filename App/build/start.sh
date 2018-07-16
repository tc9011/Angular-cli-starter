#!/bin/sh
pkill -9 nginx
sed -i "s/EV_WEBSERVER_IP/$WEBSERVER_IP/g" /etc/nginx/nginx.conf
sed -i "s/EV_WEBSERVER_PORT/$WEBSERVER_PORT/g" /etc/nginx/nginx.conf
nginx
while(true);do
  echo "sleep 1 second"
  sleep 1000000000000
done
