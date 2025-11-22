// ----- 1. START WITH A RANDOM STUDENT -----
let index = Math.floor(Math.random() * students.length);

// This array will change when searching
let filteredList = students;

// ----- 2. LOAD STUDENT FUNCTION -----
function loadStudent() {

  const currentStudent = filteredList[index];

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

// ----- 3. NEXT BUTTON -----
document.getElementById("nextBtn").onclick = () => {
  if (filteredList.length === 0) return;
  index++;
  if (index >= filteredList.length) index = 0;  
  loadStudent();
};

// ----- 4. PREVIOUS BUTTON -----
document.getElementById("prevBtn").onclick = () => {
  if (filteredList.length === 0) return;
  index--;
  if (index < 0) index = filteredList.length - 1; 
  loadStudent();
};

// ----- 5. LOAD BUTTON (RANDOM STUDENT) -----
document.getElementById("btn").onclick = () => {
  filteredList = students;     // reset filtered list
  index = Math.floor(Math.random() * students.length);
  loadStudent();
};

// ------------------------------------------------------------------
// ----- 6. SEARCH BY NAME (NEW FEATURE YOU WANTED) -----
// ------------------------------------------------------------------
document.getElementById("search").addEventListener("input", function () {
  
  const searchValue = this.value.toLowerCase().trim();

  // Filter students by name or nickname
  filteredList = students.filter(student =>
    student.name.toLowerCase().includes(searchValue) ||
    student.nickName.toLowerCase().includes(searchValue)
  );

  // If found, show first result
  if (filteredList.length > 0) {
    index = 0;
    loadStudent();
  } 
  
  // If none found, show message
  else {
    document.getElementById("picture").innerHTML = "";
    document.getElementById("name").innerText = "No student found";
    document.getElementById("nickName").innerText = "";
    document.getElementById("occupation").innerText = "";
    document.getElementById("marital").innerText = "";
    document.getElementById("hobbies").innerText = "";
    document.getElementById("phoneNum").innerText = "";
    document.getElementById("locate").innerText = "";
  }
});
