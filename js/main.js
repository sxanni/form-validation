
const form = document.querySelector("form");
// const formControl = form.querySelector(".form-control");
// const username = document.getqueryselector("#unsername");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// const small = document.querySelector("small");
// const error = document.getSelector(".form-control small");


//e = event parameter
form.addEventListener("submit", (e) => {

e.preventDefault();//prevents form submission

checkInputs();   
});



function checkInputs() {//check input function
    //Trim all white spaces when accceptin input
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //check for username input
    if (usernameValue === "") {
       setError(username, "Error: username cannot be empty");
  
    }else{
        setSuccess(username);
    } 

        //check for pasword input
    if (passwordValue === "") {
        setError(password, "Error: password cannot be empty");

    }else{
        setSuccess(password);
    }
        //check for pasword confirm input
    if (password2Value === "") {
        setError(password2, "Error: password cannot be empty");

    }else{
        setSuccess(password2);
    }
}

//errors are contained inside a function. locally scoped to avoid accidental use of similar variable
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    // formControl.classList.add("form-control", "error");
    small.textContent = message;
    // console.log(formControl);/
}
//display succes when input valid
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    // formControl.classList.add("form-control", "error");

}
 


function verifyPassword(){
    
    let pw1 = document.getElementById("password").value;  
    let pw2 = document.getElementById("password2").value;  
    if(pw1!==pw2){
        alert("password not matching")
    }
} 