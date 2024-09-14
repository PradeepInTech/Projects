//All logic behind;

//Getting the required Elements from the Html file
const inputbox = document.getElementById('input');
const container = document.getElementById('container');

//loading the previously saved data
load()

//Function to Save the data
function save() {
    localStorage.setItem("data", container.innerHTML);
}

//Function to Load the data
function load() {
    container.innerHTML = localStorage.getItem("data");
}

//Function to add elements and value given by the user as a list
function TaskAdd() {
    if (inputbox.value === "") {
        alert("Please write something to add");
    }
    else {
        //Creating elements
        let li = document.createElement('li');
        let p = document.createElement('p');
        let span = document.createElement("span");
        //Adding Values to the elements given by the user;
        li.innerHTML = "> "
        p.innerHTML = inputbox.value;
        span.innerHTML = "delete";
        //Appending the elements to the html file
        container.appendChild(li);
        li.appendChild(p);
        li.appendChild(span);
    }
    input.value = "";
    //Saving the data
    save();
}

//Checking for any click to the span and p tag;
container.addEventListener('click', function (e) {
    if (e.target.tagName === "SPAN") {
        //Removing the li element once delete is clicked
        e.target.parentElement.remove();
        save();
    }
    else if (e.target.tagName === "P") {
        //Adding and Removing the class "checked" from p tag
        e.target.classList.toggle("checked");
        save();
    }
}, false);

