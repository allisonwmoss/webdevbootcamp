let input = prompt('What would you like to do?')
const todos = ['Wake up', 'Get dressed'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new item?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter the index of the item you want to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, ${deleted[0]} was deleted.`);
        } else {
            console.log('Please enter a valid index.')
        }

    }
    input = prompt('What would you like to do?')
}
console.log('Thanks for using the to do list app!');
