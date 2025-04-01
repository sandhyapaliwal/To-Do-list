To-Do List Web App
A simple and interactive To-Do List application built using HTML, CSS, and JavaScript. This project allows users to add, remove, and mark tasks as complete. The tasks are saved in the browser's local storage, ensuring they persist even after the page is refreshed.

Features
Add Tasks: Users can add new tasks by typing in the input field and clicking the "Add" button.

Delete Tasks: Tasks can be removed by clicking the "×" icon next to each task.

Mark Tasks as Done: Users can mark tasks as complete by clicking on them, which strikes through the text.

Persistent Data: Tasks are stored in the browser’s local storage, keeping them available even after refreshing the page.

Technologies Used
HTML: For structuring the app.

CSS: For styling and layout.

JavaScript: For handling the logic of adding, deleting, and toggling tasks.

Local Storage: For saving and loading tasks between page reloads.

How to Use
Open the To-Do List application in your web browser.

Add a Task: Type in the input box and click the "Add" button.

Mark a Task as Done: Click on a task to strike through it and mark it as complete.

Delete a Task: Click the "×" icon next to a task to remove it.

Tasks will be saved in your browser's local storage and will remain available after refreshing the page.

Code Explanation
HTML: The structure includes an input field, an "Add" button, and an unordered list (<ul>) to display tasks.

JavaScript:

addTask(): Adds a new task to the list and saves the updated list in local storage.

saveData(): Saves the current list of tasks to local storage.

showTask(): Loads the saved tasks from local storage when the page is loaded.

CSS: Styles the app to provide a clean and user-friendly interface.
