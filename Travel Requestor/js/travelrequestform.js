//document eventlistener
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('frmTravelRequest');
    const empId = document.getElementById("empid");
    const empName = document.getElementById("empname");
    const project = document.getElementById("project");
    const causeOfTravel = document.getElementById("travel");
    const source = document.getElementById("source");
    const destination = document.getElementById("destination");
    const fromDate = document.getElementById("fromdate");
    const noOfDays = document.getElementById("noOfDays");
    const toDate = document.getElementById("toDate");
    const modeOfTravel = document.getElementById("modeoftravel");
    const priority = document.querySelectorAll("priority");

    //error messages
    const idError = document.getElementById("empidError");
    const nameError = document.getElementById("empnameError");
    const projectError = document.getElementById("projectError");
    const causeError = document.getElementById("causeError");
    const sourceError = document.getElementById("sourceError");
    const destinationError = document.getElementById("destinationError");
    const fromdateError = document.getElementById("fromdateError");
    const todateError = document.getElementById("todateError");
    const daysError = document.getElementById("noOfDaysError");
    const modeError = document.getElementById("modeError");
    const priorityError = document.getElementById("priorityError");

    //eventlistener on submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!empId.value.trim()) {
            idError.textContent = "Employee id is required!!";
        } else {
            idError.textContent = "";
        }
        if (!empName.value.trim()) {
            nameError.textContent = "Name is required!!";
        } else {
            nameError.textContent = "";
        }
        if (!project.value.trim()) {
            projectError.textContent = "Project is required!!";
        } else {
            projectError.textContent = "";
        }
        if (!causeOfTravel.value.trim()) {
            causeError.textContent = "Cause of travel is required!!";
        } else {
            causeError.textContent = "";
        }
    
        if (!source.value.trim()) {
            sourceError.textContent = "Source  is required!!";
        } else {
            sourceError.textContent = "";
        }
        if (!destination.value.trim()) {
            destinationError.textContent = "Destination is required!!";
        } else {
            destinationError.textContent = "";
        }
        if (!fromDate.value.trim()) {
            fromdateError.textContent = "Date is required!!";
        } else {
            fromdateError.textContent = "";
        }
        
        if (!noOfDays.value.trim()) {
            daysError.textContent = "No of days of travel is required!!";
        } else {
            daysError.textContent = "";
        }
        if (!toDate.value.trim()) {
            todateError.textContent = "Date is required!!";
        } else {
            todateError.textContent = "";
        }

        if (!modeOfTravel.value.trim()) {
            modeError.textContent = "Mode of travel is required!!";
        } else {
            modeError.textContent = "";
        }
        if(!selectedPriority.value.trim()){
            priorityError.textContent="Please select priority";
            
        }else{
            priorityError.textContent="";
        }
    });
    toDate.addEventListener("change",function(){
        var from=new Date(fromDate.value.trim());
        var to=new Date(toDate.value.trim());
        var days=to-from;
        const  daysDifference = Math.floor(days / (1000 * 60 * 60 * 24));
        console.log (daysDifference);
        noOfDays.value=daysDifference;
    });

});