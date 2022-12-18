// NPM Module
const color = require("cli-color"); // Loading Module

console.log(color.blue("Hello NodeJS")); // Displays the text in blue color

// Local Module
const auth = require("./auth");

auth.register("Aayush Rana");
auth.login("Aayush Rana");

// Core Module

// -> Path Module
const path = require("path");

console.log(__filename);
console.log(`Directory Name`, path.dirname(__filename)); // tells current folder name
console.log(`Base Name`, path.basename(__filename)); // name of this file
console.log(`Extension`, path.extname(__filename)); // file extension 
console.log(`Parse`, path.parse(__filename)); // Gives all above information at once
console.log(`Join`, path.join(__dirname, "order", "app.js")); // join all together

// -> File System Module
const fs = require("fs");

// Creating a folder
fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log("Folder Created ...");
});

// Creating a file
fs.writeFile(
  path.join(__dirname, "test", "test.txt"), // where we have to create file in which folder
  "Hello NodeJS\n", // what content to add in that file
  (err) => {
    // callback function to handle error or success
    if (err) {
      console.log(err);
      throw err;
    }
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"), // path 
      "Let Get Started!", // what content to add more without deleting previous content
      (err) => {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log("Data Appended...");
      }
    );
    console.log("File Created...");
  }
);

// Reading a file - pathname, utf-8, function
fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => { 
  // In call back function there are 2 parameters error and data which is read from file
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// -> Operating System Module
const os = require("os");

console.log("OS Type:", os.type()); // Like Windows
console.log("OS Platform:", os.platform()); // Like win32
console.log("OS Architecture:", os.arch()); // Like 64 bit
console.log("CPU:", os.cpus()); // CPU Information like i3 or i5
console.log("Total Space", os.totalmem()); // Total memory present in bytes
console.log("Free Space:", os.freemem()); // Free space present in bytes
console.log("Uptime:", os.uptime()); // Last Restarted in seconds

// -> Events Module

const emitter = require("events"); // emitter here is class so need to convert to object

const myEmitter = new emitter(); // converted to object

// listener added
myEmitter.on("EventName", (data) => { // On works like function definition
  console.log(data);
});

myEmitter.emit("EventName", { // Emit works like function call
  name: "Aayush Rana",
});

// class Auth is created inside which register function is defined
class Auth extends emitter {
  register(username) {
    console.log(`${username} Registered Successfully...`);
    // Emit here works like function call
    this.emit("registered", username); // here emitting an event i.e registered
  }
}

const auth = new Auth(); // class is converted to the object

// listen

// -> verify email
auth.on("registered", (data) => {
  console.log(`Send Registered mail to ${data}`);
});

// -> welcome email
auth.on("registered", (data) => {
  console.log(`Sending Welcome Mail to ${data}`);
});

auth.register("Aayush Rana"); // we can call register function which is inside the auth