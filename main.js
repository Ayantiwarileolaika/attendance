student_array = [];
function submit(){
    var name1 = document.getElementById("student1").value;
    student_array.push(name1);
    var name2 = document.getElementById("student2").value;
    student_array.push(name2);
    var name3 = document.getElementById("student3").value;
    student_array.push(name3);
    var name4 = document.getElementById("student4").value;
    student_array.push(name4);
    document.getElementById("Display").innerHTML = student_array;
}