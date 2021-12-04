const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');

const employees =[];

const addManager =() =>{  
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter team manager name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter manager employee id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager employee email',
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter manager office number',
    }
   

])
.then (teamManager =>{
      const {name,id,email,officenumber} = teamManager;
     const manager = new Manager(name,id,email,officenumber);
     employees.push(manager);
     console.log(manager);
});
}
addManager();

//const addemployee =() =>{
  // return inquirer.prompt([
//{
     //   type: 'checkbox',
      //  name: 'employee',
      //  message: ' would you like to add ',
      //  choices: ['Engineer', 'Intern', 'finish bulding the team']
   // }
   //])

//}