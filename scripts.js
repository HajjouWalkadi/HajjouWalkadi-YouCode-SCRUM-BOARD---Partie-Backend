function editTask(id){
    console.log(id);
    // console.log(title);
    // console.log(type);
    // console.log(priority);
    // console.log(status);
    // console.log(date);
    // console.log(description);
    $('#modal-task').modal('show');
    document.querySelector('#task-id').value = id;
    document.querySelector('#task-title').value = id;
    // document.querySelector('#task-title').value = element.children[1].children[0].textContent;
    // console.log(element.children[1].children[0].textContent);
}