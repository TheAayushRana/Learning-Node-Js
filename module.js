// NPM Module
const color = require("cli-color"); // Loading Module

console.log(color.blue("Hello NodeJS"));

// Local Module
const auth = require("./auth");

auth.register("Aayush Rana");
auth.login("Aayush Rana");
