[![Stories in Ready](https://badge.waffle.io/StratosAgein/Sigma.Data.png?label=ready&title=Ready)](https://waffle.io/StratosAgein/Sigma.Data) [![Stories in Progress](https://badge.waffle.io/StratosAgein/Sigma.Data.png?label=In%20Progress&title=In%20Progress)](https://waffle.io/StratosAgein/Sigma.Data) [![Stories in Done](https://badge.waffle.io/StratosAgein/Sigma.Data.png?label=Done&title=Done)](https://waffle.io/StratosAgein/Sigma.Data)
# Sigma.Data
Contains all scripts for create a Sigma Database

## Technologies
Our database was implemented with MongoDB

### Useful snippet code
    sudo nano /etc/mongod.conf
    bindIP = [127.0.0.1,192.168.0.50]

## Unattended installation on Windows 
Preferably develop on Windows 10, for use all scripts you need install MongoDB from https://www.mongodb.com/download-center and select your Mongo Version. But if you're beginner on MongoDB you can use our tool for Windows InstallMongoDB.cmd script into ToolsForWindows folder. Only you need execute like administrator and now, every Windows Startup you have MongoDB Server running

![Execute like admin](http://i.imgur.com/CoEDYkL.png)

## Execute MongoDB Server on Windows
If you install manually MongoDB go to ToolsForWindows folder, and now execute MongoServer.cmd script.

## Run MongoDB commands on Windows
If you install manually MongoDB go to ToolsForWindows folder, and now execute RunMongoCommands.cmd script.
