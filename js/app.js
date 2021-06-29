
let firstName, lastName, email, password, repeatPass;

let users = []
let arr = [
    {
        name: "Amala",
        price: 350,
    },
    {
        name: "Rice",
        price: 1500
    },
    {
        name: "Yam Fritters Breaded Fish",
        price: 1000
    },
    {
        name: "Spaghetti",
        price: 500
    },
    {
        name: "Indomie",
        price: 200
    },
    {
        name: "Plain Beans",
        price: 300
    },
    {
        name: "Rice and Beans",
        price: 600
    },
    {
        name: "Jollof with Grilled Meat and Plantain",
        price: 2250
    },
    {
        name: "Plantain Porridge Beef Kebab",
        price: 2000
    }
];

let register = () => {
    users = JSON.parse(localStorage.getItem("users"))
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
        document.getElementById("myModa").style.display = "inherit"
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
let modalBody = document.getElementById("modal-body")
let foodCarts = document.getElementById("foodCarts")
let searchMealval;
let foodName = document.getElementsByClassName("foodname");
let beforeFood = document.getElementById("beforeFood");
let orderedFood = [];
for (let index = 0; index < arr.length; index++) {
    orderedFood.push({
        name: arr[index].name,
        price: arr[index].price,
        quantity: 0
    })

}
localStorage.setItem("foodsInCart", JSON.stringify(orderedFood));
let totalPrice = document.getElementById("totalPrice")
let price;
let quantity;
//orderedFood = JSON.parse(localStorage.getItem("foodsInCart"))
let foonam = document.getElementById("foonam")
let addToCart = (num) => {
    arr = JSON.parse(localStorage.getItem("food"));
    orderedFood = JSON.parse(localStorage.getItem("foodsInCart"));
    for (let index = 0; index < orderedFood.length; index++) {
        console.log(foodName[num].innerHTML);
        if (orderedFood[index].name.toLowerCase() == foodName[num].innerHTML.toLocaleLowerCase()) {
            orderedFood[index].quantity += 1
            localStorage.setItem("foodsInCart", JSON.stringify(orderedFood))
            break
        }
    }
}
let displayPrice = () => {
    foodCarts.innerHTML = ""
    price = 0
    for (let index = 0; index < orderedFood.length; index++) {
        let qua = orderedFood[index].quantity
        if (qua != 0) {
            foodCarts.innerHTML += `<tr><td>${orderedFood[index].name}</td> <td>${orderedFood[index].price}</td><td><input onchange="ode(${index})" type="number" name="" class="form-control" id="quantity${index}" value="${orderedFood[index].quantity}"></td><td><button onclick="remove(${index})" class="btn-danger">Delete</button></td></tr>`
            price += (orderedFood[index].price * qua);
            totalPrice.innerHTML = ""
            totalPrice.innerHTML += `# ${price}`

        }

    }
    totalPrice.innerHTML = `# ${price}`
}

let orderedCart = () => {
    foodCarts.innerHTML = ""
    orderedFood = JSON.parse(localStorage.getItem("foodsInCart"))
    price = 0
    if (price != 0) {
        quantity = document.getElementById("quantity");
        console.log(quantity.value);
    }
    displayPrice()


}
let ode = (potn) => {
    let quantityChangedTo = document.getElementById(`quantity${potn}`).value
    orderedFood = JSON.parse(localStorage.getItem("foodsInCart"))
    orderedFood[potn].quantity = Number(quantityChangedTo)
    console.log(document.getElementById(`quantity${potn}`).value);
    displayPrice()
    localStorage.setItem("foodsInCart", JSON.stringify(orderedFood))
}
let remove = (position) => {
    orderedFood = JSON.parse(localStorage.getItem("foodsInCart"))
    console.log(orderedFood[position]);
    orderedFood[position].quantity = 0
    localStorage.setItem("foodsInCart", JSON.stringify(orderedFood))
    foodCarts.innerHTML = ""
    price = 0
    displayPrice()
}



let foodLists = document.getElementById("foodLists");

let foodListsFunc = () => {
    for (let food = 0; food < arr.length; food++) {
        foodLists.innerHTML += `<a class="dropdown-item" href="#">${arr[food].name}</a>`;
    }
}
foodListsFunc();

localStorage.setItem("food", JSON.stringify(arr))
let search = () => {
    searchMealval = document.getElementById("searchMealval").value;
    console.log(searchMealval);
    arr = JSON.parse(localStorage.getItem("food"))
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].name.toLowerCase() == searchMealval.toLowerCase()) {
            console.log("ok");
            beforeFood.innerHTML = `<p class="text-info display-4">${arr[index].name} is available.</p>`;
            break;
        }
        else {

        }
    }
}