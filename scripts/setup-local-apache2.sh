#!/bin/sh
#
# This script sets up this repository in the /var/www/html directory
# and installs Node/NPM for users in /opt.

cd ~/Downloads
git clone git@github.com:lumohacks2018/lumohacks2018.github.io
mv lumohacks2018.github.io/ html/
mv html /var/www/

cd ~/Downloads
wget https://nodejs.org/dist/v8.12.0/node-v8.12.0-linux-x64.tar.xz
sudo mv node-v8.12.0-linux-x64/ /opt/
sudo ln -s /opt/node-v8.12.0-linux-x64/bin/node /usr/bin/node
sudo ln -s /opt/node-v8.12.0-linux-x64/bin/npm /usr/bin/npm
sudo ln -s /opt/node-v8.12.0-linux-x64/bin/npx /usr/bin/npx
