// {}
// []
let firstName, lastName, email, password, repeatPass;

let users = []
localStorage.setItem("users", JSON.stringify(users))

let register = () => {
    users=JSON.parse(localStorage.getItem("users"))
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    email = document.getElementById("emailReg").value;
    password = document.getElementById("pass").value;
    repeatPass = document.getElementById("repeatPwd").value;
    if (password == repeatPass) {
        users.push(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        )
        localStorage.setItem("users", JSON.stringify(users))
        document.getElementById("myModal").innerHTML = `
            <!-- The Modal -->

            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    Regitration was successful.
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        `
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = ""
        document.getElementById("emailReg").value = ""
        document.getElementById("pass").value = ""
        document.getElementById("repeatPwd").value = ""
    }
    else {
        document.getElementById("state").innerHTML += `<br> passwords doesn't match`
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
let login = () => {
    let arr1 = JSON.parse(localStorage.getItem("users"))
    let logInemail = document.getElementById("email").value;
    let loginPassword = document.getElementById("pwd").value;
    console.log(loginPassword);
    for (let index = 0; index < users.length; index++) {
        alert(users[index])
        if (logInemail == users[index].email && loginPassword == users[index].password) {
            console.log(true);
            alert(true)
            break;
        } else {
            alert("invalid login details")
        }
    }
}
