
function validate() {
    var name = document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var pwd=document.getElementById("pwd").value;
    if (phone=="15076690274") {
        window.open("index.html")
    }else if(pwd=="12345678"){
        window.open("index.html")
    }else {
    }
}
function checkName() {
    var name = document.getElementById("name").value;
    if (name.length < 4) {
        document.getElementById("nameSpan").innerHTML = "用户名不能少于4位数"
    } else {
        document.getElementById("nameSpan").innerHTML = "正确"
    }
}
function checkPwd() {
    var pwd = document.getElementById("pwd").value;
    if (pwd.length < 8) {
        document.getElementById("pwdSpan").innerHTML = "密码不能少于8位数"
    } else if (!isNaN(pwd)) {
        document.getElementById("pwdSpan").innerHTML = "密码不能是纯数字"
    } else {
        document.getElementById("pwdSpan").innerHTML = "正确"
    }
}
function checkPwd2() {
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;
    if (pwd != pwd2) {
        document.getElementById("pwd2Span").innerHTML = "两次输入密码不一致"
    } else {
        document.getElementById("pwd2Span").innerHTML = "正确"
    }
}
function checkEmail() {
    var email = document.getElementById("email").value;
    var a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!a.test(email)) {
        document.getElementById("emailSpan").innerHTML = "不符合规范"
    } else {
        document.getElementById("emailSpan").innerHTML = "正确"
    }
}