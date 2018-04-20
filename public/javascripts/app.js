$.ajax('/api/student',{
    accepts:'application/json',
    success:function(data,status){
        var $body=$('body');
        data.forEach(function(student){
         var $ele='<div>'+studentName+'   '+age+'  '+'</div>';
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
    $.ajax('/api',{
        method:"POST",
        contentType:'application/json',
        data:JSON.stringify({
            name:studentName,
            age:age
        }),
        success:function(data,status){
//debugger;
        },
        error:function(ajax,status,err)
        {}
    
    })
})