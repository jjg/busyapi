#!/usr/bin/env bash

apt-get update
apt-get install -y nginx
apt-get install -y htop
apt-get install -y wrk
apt-get install -y haproxy


cp /vagrant/default-nginx /etc/nginx/sites-enabled/
cp /vagrant/haproxy.cfg /etc/haproxy/

systemctl restart nginx
systemctl restart haproxy