const popup = document.getElementById('popup');
const openPop = document.getElementById('openPop');
const closePop = document.getElementById('closePop');

openPop.addEventListener( 'click', () =>{
    popup.style.display = 'flex';
})

closePop.addEventListener('click', () =>{
    popup.style.display = 'none';
})


function addLi() {

    // Saving the input values.
    const task = document.getElementById('task').value;
    const dueDate = document.getElementById('dDate').value;
    const startTime = document.getElementById('time').value;
    const endTime = document.querySelectorAll('input[type="time"]')[1].value;
    const ul = document.querySelector('.list ul');

    if (task.value == ''){
        alert("Please enter a Task...");
    }
    else {
        
        // Creating li element.
        let li = document.createElement("li");
        li.className = 'card';
        
        li.innerHTML = `
        ${task} <br/>
        Due date: ${dueDate || 'Not set'}<br/>
        Time: ${startTime || '--'} to ${endTime || '--'}<br/>
        <label>Completed:</label>
        <input type="checkbox">
        <button type="button" class="deleteBtn" onclick="this.parentElement.remove()">Delete</button>
        `;

        ul.appendChild(li);

        // Clear inputs.
        document.getElementById('task').value = '';
        document.getElementById('dDate').value = '';
        document.getElementById('time').value = '';
        document.querySelectorAll('input[type="time"]')[1].value = '';

        // Closing popup
        popup.style.display = 'none';
    }
}



// document.querySelector('.popup-form form button').addEventListener('click', function () {
//     const task = document.getElementById('task').value;
//     const dueDate = document.getElementById('dDate').value;
//     const startTime = document.getElementById('time').value;
//     const endTime = document.querySelectorAll('input[type="time"]')[1].value;

//     if (!task) {
//         alert("Please enter a task name.");
//         return;
//     }

//     const ul = document.querySelector('.list ul');
//     const li = document.createElement('li');
//     li.className = 'card';

//     li.innerHTML = `
//         ${task} <br/>
//         Due date: ${dueDate || 'Not set'}<br/>
//         Time: ${startTime || '--'} to ${endTime || '--'}<br/>
//         <label>Completed:</label>
//         <input type="checkbox">
//         <button type="button" class="deleteBtn">Delete</button>
//     `;

//     ul.appendChild(li);

//     // Clear inputs
//     document.getElementById('task').value = '';
//     document.getElementById('dDate').value = '';
//     document.getElementById('time').value = '';
//     document.querySelectorAll('input[type="time"]')[1].value = '';

//     // Close the popup
//     document.getElementById('popup').style.display = 'none';

//     // Add delete functionality
//     li.querySelector('.deleteBtn').addEventListener('click', function () {
//         li.remove();
//     });
// });