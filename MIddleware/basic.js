let student={
    name:"Divyansh Agarwal",
    age:20,
    city:"Delhi"
};



console.log(student);
console.log(typeof(student));
student=JSON.stringify(student);
console.log(typeof(student));
student=JSON.parse(student);
console.log(typeof(student));