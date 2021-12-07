
function generatManager(manager){
    return `
    <div class="card-header">
               <h3>${manager.name}</h3>
               <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officenumber}</p>
            </div>
        </div>
    </div>
    `
}

function generatEngineer(engineer){
    return `
       <div class="card-header">
               <h3>${engineer.name}</h3>
               <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

function generatIntern(intern){
    return `
    <div class="card-header">
               <h3>${intern.name}</h3>
               <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
}



function generatHTML(data){

  const employeeArry = [];
    for (let i = 0; i < data.length; i++) {
        //const employee = data[i];
        const role = data[i].getRole(); 

        if (role === 'Manager') {
            const manager = generatManager(data[i]);

            employeeArry.push(manager);
        }

        if (role === 'Engineer') {
            const engineer = generatEngineer(data[i]);

            employeeArry.push(engineer);
        }
        if (role === 'Intern') {
            const intern = generatIntern(data[i]);

            employeeArry.push(intern);
        }
        
       
    }   
    const displayEmployee = employeeArry.join('');  
     const displayTeam = generatTeamPage(displayEmployee);
     return displayTeam;
    }

    function generatTeamPage(displayEmployee){

        return`
        <div>
        ${displayEmployee}
        
        </div>
        `
    }
 

module.exports = generatHTML;











