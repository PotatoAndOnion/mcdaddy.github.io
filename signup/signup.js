const signupForm = () => {
    if (
        document.getElementById("email-signup").value === "" || document.getElementById("password-signup").value === "" || document.getElementById("password-confirm").value === ""
    ){
        alert("Please enter your credentials")
    }else{
        let email = document.getElementById("email-signup").value
        let password = document.getElementById("password-signup").value
        let passwordConfirm = document.getElementById("password-confirm").value
        if (password === passwordConfirm){
            localStorage.setItem("email", email)
            localStorage.setItem("pass", password)
            document.getElementById("email-signup").value = ""
            document.getElementById("password-signup").value = ""
            document.getElementById("password-signup").value = ""
            window.location.href="../signin/signin.html"
            alert("Signed Up")
        }else{
            alert("Passwords do not match")
        }
    }
}