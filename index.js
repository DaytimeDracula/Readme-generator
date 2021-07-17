//Requires
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Inquirer
const userInput = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "dreamJob",
        message: "What is your dream job?"
    },
    {
        type: "input",
        name: "jobWhy",
        message: "Why do you want this job?"
    },];

    //writeFile
const writeToFile = (fileName, data) => {
     fs.writeFileSync(path.join(process.cwd(), fileName), data, err => {
        err ? console.log(err) : console.log("File created");
    })
};