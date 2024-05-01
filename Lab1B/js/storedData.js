$(document).ready(() => {
  getData();
});

function getData() {
  let storedData = localStorage.getItem('student');
  let student = JSON.parse(storedData);

  $('#studentName').text(student.name);
  $('#studentDOB').text(student.dob);
  $('#studentEmail').text(student.email);
  $('#studentPhone').text(student.phone);
  $('#studentGender').text(student.gender);
}