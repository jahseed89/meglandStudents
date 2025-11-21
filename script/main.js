// ----- 1. START WITH A RANDOM STUDENT -----
let index = Math.floor(Math.random() * students.length);

// ----- 2. LOAD STUDENT FUNCTION -----
function loadStudent() {

  const currentStudent = students[index];

  if (!currentStudent) return;

  document.getElementById("picture").innerHTML = `<img src="${currentStudent.picture}" />`;
  document.getElementById("name").innerText = currentStudent.name;
  document.getElementById("nickName").innerText = currentStudent.nickName;
  document.getElementById("occupation").innerText = `Occupation: ${currentStudent.occupation}`;
  document.getElementById("marital").innerText = `Marital status: ${currentStudent.relationship}`;
  document.getElementById("hobbies").innerText = `Hobbies: ${currentStudent.hobbies}`;
  document.getElementById("phoneNum").innerText = `Phone: ${currentStudent.number}`;
  document.getElementById("locate").innerText = `Current Location: ${currentStudent.location}`;
}

// Load random student on first page load
document.addEventListener("DOMContentLoaded", loadStudent);

// ----- 3. NEXT BUTTON (<button id="nextBtn"> → ) -----
document.getElementById("nextBtn").onclick = () => {
  index++;
  if (index >= students.length) index = 0;   // wrap to first student
  loadStudent();
};

// ----- 4. PREVIOUS BUTTON (<button id="prevBtn"> ← ) -----
document.getElementById("prevBtn").onclick = () => {
  index--;
  if (index < 0) index = students.length - 1;  // wrap to last student
  loadStudent();
};

// ----- 5. LOAD BUTTON (random student) -----
document.getElementById("btn").onclick = () => {
  index = Math.floor(Math.random() * students.length);
  loadStudent();
};
