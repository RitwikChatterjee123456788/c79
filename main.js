student_array = [];

function submit()
{
var name1=document.getElementById("name_of_the_students_1").value;
student_array.push(name1);

var name2=document.getElementById("name_of_the_students_2").value;
student_array.push(name2);

var name3=document.getElementById("name_of_the_students_3").value;
student_array.push(name3);

var name4=document.getElementById("name_of_the_students_4").value;
student_array.push(name4);

document.getElementById("display_name").innerHTML=student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}


function  sorting()
{
student_array.sort();
document.getElementById("display_name").innerHTML=student_array;
}