let nameOfCustomer
// {}
let emailOfCustomer

let phoneNumber
let messageDropped
let messageArr=[]
localStorage.setItem("contactDetails",JSON.stringify(messageArr))
let submit = () => {
    messageArr = JSON.parse(localStorage.getItem("contactDetails"))
    nameOfCustomer = document.getElementById("name").value;

    emailOfCustomer = document.getElementById("email").value;

    phoneNumber = document.getElementById("phoneNumber").value;
    messageDropped = document.getElementById("message").value;

    messageArr.push(
        {
            name:nameOfCustomer,
            email:emailOfCustomer,
            phone:phoneNumber,
            message:messageDropped
        }
    )
    localStorage.setItem("contactDetails",JSON.stringify(messageArr))
    document.getElementById("name").value = "";
    document.getElementById("email").value="";
    document.getElementById("phoneNumber").value="";
    document.getElementById("message").value="";
}