let index = 0;

function loadStudent() {
  // Make sure students array exists
  console.log("Students:", students);

  const currentStudent = students[index];

  if (!currentStudent) {
    console.error("Student not found at index:", index);
    return;
  }

  document.getElementById(
    "picture"
  ).innerHTML = `<img src="${currentStudent.picture}" />`;

  document.getElementById("name").innerText = currentStudent.name;
  document.getElementById("nickName").innerText = currentStudent.nickName;
  document.getElementById(
    "occupation"
  ).innerText = `Occupation: ${currentStudent.occupation}`;

  document.getElementById(
    "marital"
  ).innerText = `Marital status: ${currentStudent.relationship}`;

  document.getElementById(
    "hobbies"
  ).innerText = `Hobbies: ${currentStudent.hobbies}`;
  document.getElementById(
    "phoneNum"
  ).innerText = `Phone: ${currentStudent.number}`;

  document.getElementById(
    "locate"
  ).innerText = `Current Location: ${currentStudent.location}`;
}

document.addEventListener("DOMContentLoaded", loadStudent);

document.getElementById("btn").onclick = () => {
  index++;
  if (index >= students.length) index = 0;
  loadStudent();
};

// let lenghtOfStudents = Math.floor((Math.random() * students.length));
// let currentStudent = students[lenghtOfStudents]

//    const loadStudent = ()=> {

//     let studentPic = document.getElementById('picture')
//     let studentName = document.getElementById('name')
//     let maritalStatus = document.getElementById('marital')
//     let studentNum = document.getElementById('phoneNum')
//     let locateME = document.getElementById('locate')

//     studentPic.innerHTML = `<img src= '${currentStudent.picture}'/>`
//     studentName.innerText = currentStudent.name
//     maritalStatus.innerText = `Marital status: ${currentStudent.relationship}`
//     studentNum.innerText = `Phone: ${currentStudent.number}`
//     locateME.innerText = `Current Location: ${currentStudent.location}`

//    }

// document.addEventListener('DOMContentLoaded', loadStudent)

// const nextStudent = document.getElementById('btn')

// nextStudent.onclick = () => {
//     window.location.reload()
// }
