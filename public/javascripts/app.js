//const student=require("./../../models/student");
$.ajax('/api/student',{
    accepts:'application/json',
    success:function(student,status){
        var $body=$('body');
        student.forEach(function(student){
         var $ele='<div>'+student.name+'   '+student.age+'  '+'</div>';
         $body.append($ele);
        }   
        );
    },error:function(ajax,status,err)
    {
    }
})
$('#btn').on('click',function(e){
    var studentName =$('input[name="studentName"]').val();
    var age=$('input[name="age"]').val();
   // debugger;
    $.ajax('/api/student/send',{
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify({
            name:studentName,
            age:age
        }),
        success:function(student,status){
            var $body=$('body');
           // student.forEach(function(student){
             var $ele='<div>'+student.name+'   '+student.age+'  '+'</div>';
             $body.append($ele);
           // }   
           // );
//debugger;
        },
        error:function(ajax,status,err)
        {}
    
    })
})