function validation(){
    var username= document.getElementById('username').value;
    var email= document.getElementById('email').value;
    var address=document.getElementById('address').value;
    var number= document.getElementById('number').value;
    var details=document.getElementById('details').value;

    // regex expression--------

    var usercheck=/^[A-Za-z]{3,30}.$/;
    var emailcheck=/^[A-Za-z]{2,}[0-9]{1,30}@[A-Za-z]{2,}.[A-Za-z]{2,}$/;
    var numbercheck=/^[6-9]{1}[0-9]{9}$/;
   

    //  check username-----

    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML="correct ";
    }else{
        document.getElementById('usererror').innerHTML=" X X Username is Invalid";
        return false;
    };

    // check email ----

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML="correct";
    }else{
        document.getElementById('emailerror').innerHTML=" X X Email is Invalid";
        return false;
    };

    // number check--------

    if(numbercheck.test(number)){
document.getElementById('numbererror').innerHTML=" ";
    }else{
        document.getElementById('mobileerror').innerHTML="X X Number is Invalid";
        return false;
    }




}