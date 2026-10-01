const fs = require('fs');

if (!fs.existsSync('Task.json')) {
    fs.writeFileSync('Task.json', JSON.stringify([]));
}

const data = fs.readFileSync('Task.json', 'utf8');
const tasks = JSON.parse(data);

taskSelector();

function addTask() {

    let task = process.argv[3];
    const newId = tasks.length + 1;
    tasks.push({
          id: newId,
        task: task
    });

    console.log("Task added:", task);

    fs.writeFileSync(
        'Task.json',
        JSON.stringify(tasks, null, 2)
    );
}

function allList(){
    for(const task of tasks){
        console.log(`${task.id}. ${task.task}`);
    }
}

function deleteTask(){
    let id = Number(process.argv[3]);
    const newtasks = tasks.filter(function(task){
        return task.id !== id;
    });
    for(let i=id-1;i<newtasks.length;i++){
        newtasks[i].id=newtasks[i].id-1;
      console.log(newtasks[i].id)
    }
    fs.writeFileSync("Task.json", JSON.stringify(newtasks, null, 2));
    
    console.log("Task is delted ");
    console.log("Updated list");
   allList();
}


function update(){
    let id = Number(process.argv[3]);
    let updatedTask = process.argv[4];
    for(let task of tasks){
        if(task.id == id){
            task.task = updatedTask;
        }
    }
    fs.writeFileSync("Task.json", JSON.stringify(tasks, null, 2));
    allList();
}

function taskSelector() {

    let command = process.argv[2];

    switch (command) {

        case "add":
            addTask();
            break;

        case "list":
            console.log("All Task Lists:");
            allList();
            break;

        case "delete":
            deleteTask();
            break;
        
        case "update":
            update();
            break;

        case "exit":
            console.log("Thank you for using Todo-List");
            break;

        default:
            console.log("Incorrect command");
    }
}