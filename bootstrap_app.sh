#!/usr/bin/env bash

apt-get update
apt-get install -y htop
apt-get install -y npm
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
apt-get install -y nodejs
apt-get install -y wrk