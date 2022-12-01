const myDetails = { name: "mitch", age: 30 };

myDetails.job =("coder");
//myDetails.name =("firstname");
myDetails["firstname"] = myDetails["name"];
delete myDetails.name;
console.log(myDetails);

// What will happen when this file is executed with Node?
// What is the problem with this code?
