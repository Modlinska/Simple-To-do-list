document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("addTaskButton");
    var toDoList = document.getElementById("taskList");
    var input = document.getElementById("taskInput");
    var linumber = toDoList.children;
    var list = document.querySelector('.list');
    var counter = document.createElement('p');
    var removealldone = document.getElementById("removeFinishedTasksButton");

    list.insertBefore(counter, toDoList);

    function addTask() {
        var newLi = document.createElement("li");
        var newp = document.createElement("p");
        var completeButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        toDoList.appendChild(newLi);
        newLi.appendChild(newp);
        newp.innerText = input.value;
        newLi.appendChild(completeButton);
        newLi.appendChild(deleteButton);
        completeButton.innerText = "Complete";
        completeButton.classList.add("complete");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "Delete";
        input.value = '';
        counter.innerText = "Liczba zadań: " + linumber.length;

        completeButton.addEventListener('click', function () {
            this.parentElement.classList.toggle("done");

        });

        deleteButton.addEventListener('click', function () {
            toDoList.removeChild(this.parentElement);
            counter.innerText = "Liczba zadań: " + linumber.length;
        });

    }

    addButton.addEventListener('click', function () {
        if (input.value.length > 2 && input.value.length < 100) {
            addTask();
        }
    });

    input.addEventListener("keypress", function (event) {
        if ((input.value.length > 2 && input.value.length < 100) && (event.which === 13 || event.keyCode === 13)) {
            addTask();
        }
    });


    removealldone.addEventListener('click', function () {

        for (var i = (linumber.length - 1); i >= 0; i--) {
            if (linumber[i].getAttribute("class") === "done") {
                toDoList.removeChild(linumber[i]);
            }
        }
        counter.innerText = "Liczba zadań: " + linumber.length;
    })

});
