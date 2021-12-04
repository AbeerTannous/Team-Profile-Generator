const Employee = require("./Employee");
//class engineer that extends parent employee
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        this.role ="Engineer";

    }
    // method for getting the github
    getGithub(){
      return this.github;
    }
    // method for getting the role
    getRole(){
        return `${this.role}`;
    }
}
module.exports = Engineer;