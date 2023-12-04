import { execSync } from "child_process";


export const getIp = () => {
    try {
        const ip = execSync('ipconfig | findstr /i "IPv4"').toString('utf-8')
        const match: any = ip.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)
        
        if (match !== null) {
            return match[0];
        } else {
            throw new Error('Unable to find IPv4 address');
        }
    } catch (error: unknown) {
        throw new Error(`An unknown error occurred`);
    }
}
export const getAll = () => {
    try {
        const ip = execSync('ipconfig | findstr /i "IPv4"').toString('utf-8')
        const match: any = ip.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)
        
        if (match !== null) {
            return match;
        } else {
            throw new Error('Unable to find any IPv4 addresses');
        }
    } catch (error: unknown) {
        throw new Error(`An unknown error occurred`);
    }
}