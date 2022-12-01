const obj = {};
obj.name = "pat";
obj["firstname"] = obj["name"];
delete obj.name;

console.log(obj);

// What will happen when this file is executed with Node?
// What is the problem with this code?
