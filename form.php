<?php 
include('scripts.php');
if(isset($_GET['id'])){
    $sql="select * from tasks";

}




?>
<!DOCTYPE html>
<html lang="en" >
<head>
	<meta charset="utf-8" />
	<title>YouCode | Scrum Board</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	<link href="assets/css/vendor.min.css" rel="stylesheet" />
	<link href="assets/css/default/app.min.css" rel="stylesheet" />
	<!-- ================== END core-css ================== -->
</head>
        <div class="modal-body">
        <!-- This Input Allows Storing Task Index  -->
        <input type="text" id="task-id" value="">
        <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" name="taskTitle" id="task-title" required/>
        </div>
        <div class="mb-3">
            <label class="form-label">Type</label>
            <div class="ms-3">
                <div class="form-check mb-1">
                    <input class="form-check-input" name="taskType" type="radio" value="Feature" id="task-type-feature" checked/>
                    <label class="form-check-label" for="task-type-feature">Feature</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="taskType" type="radio" value="Bug" id="task-type-bug"/>
                    <label class="form-check-label" for="task-type-bug">Bug</label>
                </div>
            </div>
            
        </div>
        <div class="mb-3">
            <label class="form-label">Priority</label>
            <select class="form-select" id="task-priority" name= "taskPriority" required>
                <option value="" selected disabled>Please select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Status</label>
            <select class="form-select" id="task-status" name="taskStatus" required>
                <option value="" selected disabled>Please select</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label">Date</label>
            <input type="datetime-local" class="form-control" id="task-date" name="taskDate" required/>
        </div>
        <div class="mb-0">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="10" id="task-description" name="taskDescription" required></textarea>
        </div>
        </div>
        <div class="modal-footer">
            <a href="#" class="btn btn-white" data-bs-dismiss="modal">Cancel</a>
            <button type="submit" name="delete" class="btn btn-danger task-action-btn" id="task-delete-btn">Delete</button>
            <button type="submit" name="update" class="btn btn-warning task-action-btn" id="task-update-btn">Update</button>
        
        </div>

</div>


</html>
<!-- ================== BEGIN core-js ================== -->
<script src="assets/js/vendor.min.js"></script>
	<script src="assets/js/app.min.js"></script>
	<!-- ================== END core-js ================== -->
	<script src="scripts.js"></script>