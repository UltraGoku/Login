function Login()
{
    var username=document.login.username.value;
    var password=document.login.password.value;


if (username==null || username=="")
{
    alert("User ID can't be blank");
    return false;
}

else if(password.length<3)
{
    alert("Password can't be less then 3 characters");
    return false;
}

else if(username=="parikshit" && password=="shetty")
{
    alert("Login Succesfully"); 
    return false;
}

else{
    alert("Please check your credentials")
}

}

function Register()
{
    var name=document.register.name.value;
    var username=document.register.username.value;
    var password=document.register.password.value;
    var repassword=document.register.repassword.value;

    

    if(name==null || username==null || name=="" || username=="")
    {
        alert("This fieid can't be blank, please fill this fields.");
        return false;
    }

    else if(password.length<5)
    {
        alert("password can't be less than 5 characters.");
        return false;
    }

    else if(password!=repassword)
    {
        alert("Passwords doesn't match. Please retype password");
        return false;
    }
}