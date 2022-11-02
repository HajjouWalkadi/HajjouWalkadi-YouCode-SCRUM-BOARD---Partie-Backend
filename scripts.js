function editTask(element, id, type, priority, status, date){
    document.getElementById("task-save-btn").style.display = "none";   
    document.getElementById("task-update-btn").style.display = "block";   
    document.getElementById("task-delete-btn").style.display = "block"; 
    // console.log(id);
    // console.log(element.children[1].children[1].children[1].textContent);
    // console.log(type);
    // console.log(priority);
    // console.log(status);
    // console.log(date);
    // console.log(description);
    $('#modal-task').modal('show');
    document.querySelector('#task-id').value = id;
    document.querySelector('#task-title').value = element.children[1].children[0].textContent;
    // document.querySelector('#task-type').value = title;
    document.querySelector('#task-priority').value = priority;
    document.querySelector('#task-status').value = status;
    document.querySelector('#task-date').value = date;
    document.querySelector('#task-description').value = element.children[1].children[1].children[1].textContent;
    // document.querySelector('#task-title').value = element.children[1].children[0].textContent;
    // console.log(element.children[1].children[0].textContent);
    if (type == "Bug") {
        document.getElementById('task-type-bug').checked = true;
    }
    if (type == "Feature") {
        document.getElementById('task-type-feature').checked = true;
    }
    
    
}
function addbtn() {   
    document.getElementById("form-task").reset();    
    document.getElementById("task-save-btn").style.display = "block";   
    document.getElementById("task-update-btn").style.display = "none";   
    document.getElementById("task-delete-btn").style.display = "none"; 
};
