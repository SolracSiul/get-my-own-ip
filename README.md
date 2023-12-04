# GetIP

A straightforward library designed to streamline automated access to the user's local IP.
## Features

- Retrieve the IPv4 used in the default switch via Windows terminal;
- Retrieve a list of available IPv4 addresses on your machine.
## Tech

GetIP uses a simple Stack:

- [NodeJS] - Efficient server-side JavaScript runtime for building scalable web applications.
- [Typescript] - superset of JavaScript
- [child_process] - Reliable module for executing external processes in Node.js, 

## Installation
Install the dependencies and devDependencies and start the server.

```sh
cd your-project
npm i get-my-own-ip
```
## Development
- how to use ? 
```sh
npm init -y
import {getIp, getAll} from 'get-my-own-ip'
const myadress = getIp()
console.log('Endereço IPV4:', myadress);
```
