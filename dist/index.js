"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getIp = void 0;
const child_process_1 = require("child_process");
const getIp = () => {
    try {
        const ip = (0, child_process_1.execSync)('ipconfig | findstr /i "IPv4"').toString('utf-8');
        const match = ip.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g);
        if (match !== null) {
            return match[0];
        }
        else {
            throw new Error('Unable to find IPv4 address');
        }
    }
    catch (error) {
        throw new Error(`An unknown error occurred`);
    }
};
exports.getIp = getIp;
const getAll = () => {
    try {
        const ip = (0, child_process_1.execSync)('ipconfig | findstr /i "IPv4"').toString('utf-8');
        const match = ip.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g);
        if (match !== null) {
            return match;
        }
        else {
            throw new Error('Unable to find any IPv4 addresses');
        }
    }
    catch (error) {
        throw new Error(`An unknown error occurred`);
    }
};
exports.getAll = getAll;
