
function signIn() {
    var userName = document.getElementById("username").value;
    var passw = document.getElementById("password").value;
    if (userName == "" || passw == "") {
        if(userName == "") {
            alert('Please Enter User Name');
            document.getElementById('username').style.borderColor = "red";
            return false;
        } else {
            alert('Please Enter Password');
            document.getElementById('password').style.borderColor = "red";
            return false;
        }
    }
    localStorage.setItem("userName", userName);
    location.replace("./accountPage.html");
}