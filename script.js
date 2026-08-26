const loginForm = document.getElementById("LoginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const passwordToggle = document.getElementById("passwordToggle");
const loginButton = document.getElementById("loginButton ");
const buttonText = document.getElementById("buttonText");
const loader = document.getElementById("loader");

passwordToggle.addEventListener("click", function(){
    if(password.type === "password"){
        password.type ="text";
        passwordToggle.classList.remove("bx-lock");
        passwordToggle.classList.add("box-show");
    }

    else{
        password.type ="password";
        passwordToggle.classList.remove("box-show");
        passwordToggle.classList.add("box-lock");
    }
});


//Remove error when user type

username.addEventListener("input", function(){
    usernameError.textContent = " ";
    username.style.border = " ";
});

password.addEventListener("input", function(){
    usernameError.textContent = " ";
    username.style.border = " ";
});

//Login form submit

loginForm.addEventListener("submit", function(event){
    event.preventDefault();

    //clear previes errors
    
    usernameError.textContent = " ";
    passwordError.textContent = " ";
    username.style.border = " ";
    password.style.border = " ";

    let isValid = true;

    //USer name validation

    if(username.value.trim()===" "){
        usernameError.textContent = "Please enter your user name." ;

        username.style.border = "2px solid #ff8a8a";

        isValid = false;
    }

    else if(password.value.length < 6){
        passwordError.textContent = "Password must be atleast 6 characters";
        password.style.border = "2px solid #ff8a8a";

        isValid = false;
    }

    //stop is invalid

    if(!isValid){
        return;
    }

    //Loading Effect

    loginButton.disabled = true;
    buttonText.style.display = "None";
    loader.style.display = "block";

    //Simulate Login

    setTimeout(function() {
        loader.style.display = "None";
        buttonText.style.display = "Inline";
        buttonText.textContent = "Login Successfull ";

        loginButton.style.background = "linear-gradient(135deg, #a8ff78, , #78ffd6)";

        //enable button again after 2 seconds

        setTimeout(function(){
            loginButton.disabled = "false";
            buttonText.textContent = "Login";
            loginButton.style.background = "linear-gradient(135dreg, #ffffff, #e8e8e8)";

        }, 2000);

    }, 1500);
    
})



