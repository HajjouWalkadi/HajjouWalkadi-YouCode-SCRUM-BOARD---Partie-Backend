
// *******************************************Edit Function******************************************************//

function editTask(element, id, type, priority, status, date){
    document.getElementById("task-save-btn").style.display = "none";   
    document.getElementById("task-update-btn").style.display = "block";   
    document.getElementById("task-delete-btn").style.display = "block"; 
    document.getElementById("task-delete-btn2").style.display = "block";
// ___Affichage du modal______________________________________________//
    $('#modal-task').modal('show');
    document.querySelector('#task-id').value = id;
    document.querySelector('#task-title').value = element.children[1].children[0].textContent;
    document.querySelector('#task-priority').value = priority;
    document.querySelector('#task-status').value = status;
    document.querySelector('#task-date').value = date;
    document.querySelector('#task-description').value = element.children[1].children[1].children[1].textContent;
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
    document.getElementById("task-delete-btn2").style.display = "none";
};


document.getElementById("task-delete-btn2").addEventListener('click', deleteConfirm) ;

function deleteConfirm(){
    if(confirm("Are you sure you want to DELETE this task?") == true){
        console.log("here if");
        document.getElementById('task-delete-btn').click();
    }
}
   

