$(document).ready(function() {

    console.log('hi');
    $('#addStudentBtn').click(function () {
       
        function getStudentData() {
            let date = new Date($('#dob').val());
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getFullYear();

            const selectedDate = [day,month,year].join('/');

            let student = {
                name : $('#name').val(),
                dob : selectedDate,
                email : $('#email').val(),
                phone : $('#phone').val(),
                gender : $('#gender').val()
            }
            
            return student;
        }

        function storeDataLocalStorage() {
            if(!localStorage.getItem('student')) {
                localStorage.setItem('student',JSON.stringify(getStudentData()))
            } else {
                localStorage.removeItem('student')
                localStorage.setItem('student',JSON.stringify(getStudentData()))
            }
        }

        storeDataLocalStorage();
        window.location.href = 'storedData.html' ;
        return false; 
    });
});