
let lenghtOfStudents = Math.floor((Math.random() * students.length));
let currentStudent = students[lenghtOfStudents]

   
   const loadStudent = ()=> {

    let studentPic = document.getElementById('picture')
    let studentName = document.getElementById('name')
    let maritalStatus = document.getElementById('marital')
    let studentNum = document.getElementById('phoneNum')
    let locateME = document.getElementById('locate')



    studentPic.innerHTML = `<img src= '${currentStudent.picture}'/>`
    studentName.innerText = currentStudent.name 
    maritalStatus.innerText = `Marital status: ${currentStudent.relationship}`
    studentNum.innerText = `Phone: ${currentStudent.number}` 
    locateME.innerText = `Current Location: ${currentStudent.location}`

   }

document.addEventListener('DOMContentLoaded', loadStudent)
   
const nextStudent = document.getElementById('btn')

nextStudent.onclick = () => {
    window.location.reload()
}

