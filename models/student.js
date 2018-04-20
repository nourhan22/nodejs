const mongoose=require("mongoose");
const schema=mongoose.Schema;
const studentschema= new schema({
    name:{
        type:String,
        lowercase:true
    },
    age:{
        type:Number
    },
}); 
/*studentschema.statics.findByStudentName=function(studentName){
const student=this;
return student;
}*/
const student =mongoose.model('student',studentschema,'students');
module.exports = student;