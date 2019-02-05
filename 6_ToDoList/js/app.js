document.addEventListener("DOMContentLoaded", function () {
    var inputTask = document.getElementById("taskInput");
    var addTask = document.getElementById("addTaskButton");
    var list = document.getElementById("taskList");
    var priority = document.getElementById("priorityInput");
    var taskNr = 1;

    addTask.addEventListener("click", function (event) {

        event.preventDefault();

        var newTask = document.createElement("li");
        var newTaskNr = document.createElement("h1");
        var deleteBtn = document.createElement("button");
        var completeBtn = document.createElement("button");
        var completeCounter = document.getElementById("counter");
        var deleteAll = document.getElementById("removeFinishedTasksButton");

        if (inputTask.value.length < 5 || inputTask.value.length > 100) {
            inputTask.value = "";
            inputTask.placeholder = "Za krótkie lub za długie zadanie";
        } else if (priority.value < 1 || priority.value > 10) {
            priority.value = "";
            priority.placeholder = "Zakres cyfr 1-10";
        } else {
            newTask.innerText = inputTask.value;
            newTask.value = priority.value;
            inputTask.value = "";
            priority.value = "";
            newTaskNr.innerText = "Task " + taskNr;
            deleteBtn.innerText = "Delete";
            completeBtn.innerText = "Complete";

            var lastChLi = document.querySelectorAll("#taskList li");

            if (list.childElementCount === 0) {
                list.appendChild(newTask);
                newTask.appendChild(newTaskNr);
                newTask.appendChild(deleteBtn);
                newTask.appendChild(completeBtn);
                completeCounter.innerText = list.childElementCount;
                taskNr += 1;
            } else if (list.childElementCount > 0) {
                if (newTask.value > lastChLi[lastChLi.length - 1].value) {
                    list.insertBefore(newTask, list.firstChild);
                    newTask.appendChild(newTaskNr);
                    newTask.appendChild(deleteBtn);
                    newTask.appendChild(completeBtn);
                    completeCounter.innerText = list.childElementCount;
                    taskNr += 1;
                } else {
                    list.appendChild(newTask);
                    newTask.appendChild(newTaskNr);
                    newTask.appendChild(deleteBtn);
                    newTask.appendChild(completeBtn);
                    completeCounter.innerText = list.childElementCount;
                    taskNr += 1;
                }
            }

            deleteBtn.addEventListener("click", function () {
                newTask.parentNode.removeChild(newTask);
                completeCounter.innerText = list.childElementCount;
                taskNr -= 1;
            });

            var click = 0;

            completeBtn.addEventListener("click", function () {
                if (click % 2 === 0) {
                    newTask.style.color = "red";
                    newTask.className = "done";
                } else {
                    newTask.style.color = "black";
                    newTask.className = "";
                }
                click += 1;
            });

            deleteAll.addEventListener("click", function () {
                var removeTask = document.querySelector("li");
                if (removeTask.className === "done") {
                    removeTask.parentNode.removeChild(removeTask);
                    completeCounter.innerText = list.childElementCount;
                }
            });
        }
    })
});