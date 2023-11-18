const signinForm = () => {
    if (
        document.getElementById("email-login").value === "" || document.getElementById("password-login").value === ""
    ){
        alert("Please enter your credentials")
    }else{
        let email2 = document.getElementById("email-login").value
        let password2 = document.getElementById("password-login").value
        if (email2 == localStorage.getItem("email") && password2 == localStorage.getItem("pass")){
            window.location.href="../index.html"
            alert("Signed In")
        }else{
            alert("Incorrect Email or Password")
        }
    }
}