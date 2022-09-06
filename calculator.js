
let addButton = document.getElementById("add");
let subButton = document.getElementById("submit");
let list = document.getElementById("list");

let student ={};
let students = [];
let subjects = [];
 
if (subjects.length <= 2){
    subButton.style.display = "none"
} else {
    addButton.style.display ="none"
    subButton.style.display ="block"
}
//guvgu
const add =()=>{
    let firstName =document.getElementById("firstName").value;
    let lastName =document.getElementById("lastName").value;
    let subject = document.getElementById("subject").value;
    let mark = document.getElementById("mark").value;

student.firstName= firstName;
student.lastName= lastName;
subjects.push({subjectname:subject, subjectMark: mark});

document.getElementById("subject").value ="";
document.getElementById("mark").value ="";

if (subjects.length <= 2) {
    subButton.style.display = "none"
} else {
    addButton.style.display ="none"
    subButton.style.display ="block"
}
};

let calAverage =(subs) =>{
    let sum = 0;
    for ( let i = 0; i < subs.length; i++) {
        sum= sum + parseInt(subs[i].subjectMark);
    }
    return sum/ 3;
};

const submit =() =>{
    students = [...students, {student, subjects}];
document.getElementById("firstName").value ="";
document.getElementById("lastName").value ="";
document.getElementById("subject").value ="";
document.getElementById("mark").value ="";
student ={};

list.innerHTML = students.map((student, i) => {
    return (`<p key=${i}> ${student.student.firstName}
     ${student.student.lastName} ${calAverage(student.subjects)}</p>`)
})
subjects = []
if (subjects.length <= 2) {
    document.getElementById("add").style.display = "block";
    document.getElementById("submit").style.display = "none";
}else{
    document.getElementById("submit").style.display = "block";
}
};