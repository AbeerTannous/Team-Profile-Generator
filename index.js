const inquirer = require('inquirer');
const generatHTML = require('./src/generathtml');
const fs = require('fs');
const Manager = require('./lib/Manager');
//const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employees =[];
// method for getting the manager info 
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
    },
   
   

])
.then (teamManager =>{
     const {name,id,email,officenumber} = teamManager;
     const manager = new Manager(name,id,email,officenumber);
     employees.push(manager);
     console.log(manager);
     chooseRole();
    
        
}
);
}
// method for choosing employee role
 const chooseRole=()=>{
     return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select Employee Role",
            choices: ['Engineer', 'Intern','Finish Building']
            
            
        
        }
     ]).then (userChoice =>{
         switch (userChoice.role){
             case "Engineer":
                 addEngineer();
                 break;
            case "Intern":
                addIntern();
                break;
            default:
                writeToFile('./dist/index.html', generatHTML(employees))
            
         }
     })
     
 }
// method for adding engineer
const addEngineer =() =>{
   return inquirer.prompt([
    
        {
            type: 'input',
            name: 'name',
            message: 'Enter Engineer name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Engineer employee id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Engineer  email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Engineer GitHub username',
        },


   ])
  
   .then (engineerEmployee =>{
    const {name,id,email,github} = engineerEmployee;
   const engineer = new Engineer(name,id,email,github);
   employees.push(engineer);
   console.log(engineer);
   chooseRole();
}
);

}
// method for adding intern
const addIntern =() =>{
    return inquirer.prompt([
     
         {
             type: 'input',
             name: 'name',
             message: 'Enter Intern name',
         },
         {
             type: 'input',
             name: 'id',
             message: 'Enter Intern employee id',
         },
         {
             type: 'input',
             name: 'email',
             message: 'Enter Intern email',
         },
         {
             type: 'input',
             name: 'school',
             message: 'Enter Intern school',
         },
 
 
    ])
   
    .then (internEmployee =>{
     const {name,id,email,school} = internEmployee;
    const intern = new Intern(name,id,email,school);
    employees.push(intern);
    console.log(intern);
    chooseRole();
 }
 );
 
 }

 addManager();
 // 
 function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('File has bean created')
    });
};


