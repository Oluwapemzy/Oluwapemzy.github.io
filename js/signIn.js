// {}
// []
// let firstName, lastName, email, password, repeatPass;

// let users = []
localStorage.setItem("users", JSON.stringify(users))
let login = () => {
    users = JSON.parse(localStorage.getItem("users"))
    let logInemail = document.getElementById("email").value;
    let loginPassword = document.getElementById("pwd").value;
    console.log(loginPassword);
    if (users.length==0) {
        alert("Click on the Create a new account please.")
    }
    for (let index = 0; index < users.length; index++) {
        if (logInemail == users[index].email && loginPassword == users[index].password) {
            console.log(true);
            alert(`Login Successful, welcome ${users[index].firstName.toUpperCase()}`)
            document.getElementById("email").value="";
            document.getElementById("pwd").value="";
            break;
        }else{
            console.log("false");
            alert("invalid login details")
        }
    }
}

let logBack =()=>{
    document.getElementById("fluid").style.display = "inherit"
    document.getElementById("register").style.display = "none"
    document.getElementById("register2").style.display = "none"
}
// usersArr = JSON.parse(localStorage.getItem("users"))
let removeAdd = () => {
    document.getElementById("fluid").style.display = "none"
    document.getElementById("register").style.display = "inherit"
    document.getElementById("register2").style.display = "inherit"
}

