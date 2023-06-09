// how to read a file using NodeJS

/*import { sum } from "./calc.js"   // ./=> using local module ,program created by me
let op = sum(100,100);

console.log("sum = "+op);*/

console.log("**********************************************");
// this is a internal module.
import {readFileSync} from "node:fs";

let filePath = "D:\CDAC\WPT santosh sir\day9\classWork\src\calc.js";
let filedata = readFileSync(filePath,{encoding:"utf-8"});
console.log(filedata);