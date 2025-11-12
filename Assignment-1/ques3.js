let marks=[89,90,100,87,77];
let avg=0;
let total=0;
let percentage=0;
let failed=0
for(let i=0;i<marks.length;i++){
    total+=marks[i];
    if(marks[i]<40){
        failed++;
    }
}
avg=total/marks.length;
percentage=avg;
let grade=" ";
if (percentage >= 90 && percentage <= 100) {
  grade = "A+";
} else if (percentage >= 75 && percentage < 90) {
  grade = "A";
} else if (percentage >= 60 && percentage < 75) {
  grade = "B";
} else if (percentage >= 40 && percentage < 60) {
  grade = "C";
} else {
  grade = "Fail";
}
if(failed>=2){
    console.log("You have to repeat year and your marks summary is :");
}
else{
    console.log(" Congratulations! You are clearly passand your marks summary is :");
}
console.log( `Total marks: ${total}`);
console.log(`average is: ${avg}`);
console.log(`percentage is ${percentage}`);