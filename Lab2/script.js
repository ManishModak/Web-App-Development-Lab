$(document).ready(function () {
    // Define getStudentData function to collect student data from form
    function getStudentData() {
        let date = new Date($("#dob").val());
        let day = date.getDate();
        let month = date.getMonth() + 1; // Adding 1 because month is zero-based
        let year = date.getFullYear();

        let dob = `${day}/${month}/${year}`;

        let student = {
            studentName: $("#name").val(),
            studentDob: dob,
            studentEmail: $("#email").val(),
            studentMobileNo: $("#phone").val(),
            studentGender: $("input[name='gender']:checked").val()
        };

        // Reset the form after collecting data
        $("#studentForm")[0].reset();

        return student;
    }

    // Define click event for the addStudentBtn
    $("#addStudentBtn").click(function () {
        // Define function to store student data to local storage
        function storeDataToLocalStorage() {
            let studentData = getStudentData();
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(studentData));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(studentData));
            }
        }

        // Define function to send data to server with AJAX request
        function sendData() {
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getStudentData());
            xhr.open("POST", "http://localhost:4000/storedata", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(data);
        }

        // Call functions to store data to local storage and send data via AJAX
        storeDataToLocalStorage();
        sendData();
    });
});
