$(document).ready(function () {
    function validate() {

        var username = document.getElementById("name").value;
        var pwd = document.getElementById("pwd").value;
        let key = username.value;
        let value = pwd.value;
        if (username == "qaifi" && pwd == "qaifi") {
            alert("login success")
            localStorage.setItem("login-Status",JSON.stringify(true));
            location.assign("./order.html") ;

        } else {
            alert("failed");
            localStorage.setItem("login-Status",JSON.stringify(false));

        }
    }
    $("#login-form").submit(function(ef){
        ef.preventDefault();
        validate();
    })
        
});