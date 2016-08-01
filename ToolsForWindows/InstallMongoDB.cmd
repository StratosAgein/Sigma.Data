echo Welcome to Sigma DevOps Platform

@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

choco install mongodb -y

setx path "%path%;%ProgramFiles%\MongoDB\Server\3.2\bin\"