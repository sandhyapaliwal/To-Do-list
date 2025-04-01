const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() { 
    if (inputBox.value === '') { 
        alert("You must write something!"); 
    } else { 
        let li = document.createElement("li"); // Creating list item
        li.innerHTML = inputBox.value; // Adding text to li
        listContainer.appendChild(li); 

        // Add cross icon
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; // Unicode for '×' (cross)
        span.classList.add("close"); // Add a class for styling (optional)
        li.appendChild(span); 
    } 

    // Clear input field after adding task
    inputBox.value = ""; 
    saveData(); // Save updated content
}

// Task will be checked/unchecked, and cross icon will remove the task
listContainer.addEventListener("click", function(e) { 
    // Check if the clicked element is an <li> to toggle the 'checked' class
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked");
        saveData();
    } 
    // Check if the clicked element is a <span> to remove the task
    else if (e.target.tagName === "SPAN") { 
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save the task list in local storage
function saveData() { 
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load saved tasks on page refresh
function showTask() { 
    listContainer.innerHTML = localStorage.getItem("data") || ""; 
}

showTask(); // Load tasks when the page loads
