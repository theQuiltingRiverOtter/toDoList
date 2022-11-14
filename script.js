let isOn = true;
const ToDos = [];

while (isOn) {
    let userChoice = prompt("Enter 'new' to add a ToDo, 'list' to see all the ToDos, 'delete' to remove a specific ToDo' or 'quit' to quit the application").toLowerCase();
    if (userChoice === 'quit' || userChoice === 'q') {
        isOn = false;
    } else if (userChoice === 'new' || userChoice === 'n') {
        let newToDo = prompt("Enter to Do ");
        ToDos.push(newToDo);
    } else if (userChoice === 'list' || userChoice === 'l') {
        for (let i = 0; i < ToDos.length; i++) {
            console.log(`${i + 1}. ${ToDos[i]}`);
        }
    } else if (userChoice === 'delete' || userChoice === 'd') {
        let deleteToDo = prompt("Which ToDo should be deleted (enter number)").toLowerCase();
        if (typeof (+deleteToDo) === "NaN") {
            console.log("that is not a number");
        } else {
            ToDos.splice(+deleteToDo - 1, 1);
        }
    } else {
        console.log("That doesn't seem to be a valid choice");
    }
}