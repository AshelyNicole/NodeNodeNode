const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")
const axios = require("axios")


//Questionaire
promptUser()
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "project",
        message: "What is your project's name?"
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
      },
      {
        type: "checkbox",
        name: "License",
        message: "What is kind of license should your project have?",
        choices: [
          "MIT",
          "Apache 2.",
          "GPL 3.0",
          "BSD 3.0",
          "no License Needed"
        ]
      },
      {
        type: "input",
        name: "Installation",
        message: "What command should be run to install depndencies?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What command should be run to run tests?"
      },
      {
        type: "input",
        name: "Usage",
        message: "What does the user need to know about using the repo?"
      },
      {
        type: "input",
        name: "Contributing",
        message: "What does the user need to know about contributing to the repo?"
      }
    ])
    .then(answers=>{
      let toc = `[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)]
      (https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)\n\n
      Table of Contents\n\n`
      let linkArray = [
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions"
      ]
      linkArray.forEach(value=>{
        let newLine = `[${value}](#${value})\n\n`
        toc+=newLine// shorthand for toc = toc + newLine
      })
      let detailArray = [
        answers.Installation,
        answers.Usage,
        answers.License,
        answers.Contributing,
        answers.Tests,
        // Questions values
      ]
      detailArray.forEach((value, index) =>{
        if(index==0){
          value= "To install necessary dependencies, run the following command:\n\n```\n"+value+"\n```"
        }
        if(index==4){
          value= "To run tests, run the following command:\n\n```\n"+value+"\n```"
        }
        let newLine= `## ${linkArray[index]}\n\n${value}\n\n`
        toc+=newLine
      })
      console.log(toc)
      fs.writeFile("output.md", toc, _=>console.log('we wrote it'))
    })
  }
  

