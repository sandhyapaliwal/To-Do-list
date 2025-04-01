# To-Do-list


To-Do List Web App
# A simple and interactive To-Do List application built using HTML, CSS, and JavaScript. This project allows users to add, remove, and check off tasks. It also stores the tasks in the browser's local storage, so the tasks persist even after the page is refreshed.

Features
#1- Add Tasks: Users can add new tasks to the list by typing in the input field and clicking the "Add" button.
2-Delete Tasks: Tasks can be deleted by clicking the "×" icon next to each task.
3-Mark Tasks as Done: Users can mark tasks as complete by clicking on them, which strikes through the text.
4-Persistent Data: The list of tasks is saved in the browser's local storage, so it remains even after refreshing the page.

Technologies Used
HTML: For structuring the app.
CSS: For styling and layout of the app.
JavaScript: For handling the logic of adding, deleting, and toggling tasks.
Local Storage: For saving and loading tasks between page reloads.

How to Use
Open the To-Do List application in your web browser.
Add a task by typing in the input box and clicking "Add".
To mark a task as done, click on the task. It will be crossed out.
To delete a task, click the "×" icon next to it.
Your tasks will be saved in the browser’s local storage, so they will be available when you refresh the page.

Code Explanation
The HTML defines the structure of the app, including an input field, a button, and a list container to display the tasks.
The JavaScript functions handle adding tasks, marking them as completed, deleting them, and saving tasks in local storage.
addTask(): Adds a new task to the list and saves the list in local storage.
saveData(): Saves the current task list in local storage.
showTask(): Loads the task list from local storage when the page is loaded.
The CSS styles the app to provide a clean and user-friendly interface.
