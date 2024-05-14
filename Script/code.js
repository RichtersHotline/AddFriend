


let friendslist = [
    {
firstname:"f",
lastname: "g"

    }
]


 function addfriend() {
let firstName = document.getElementById("Fname").value
let lastName = document.getElementById("Sname").value
friendslist.push(firstName, lastName) 

console.log(friendslist);



}

function Clear() {

window.location.reload();
}