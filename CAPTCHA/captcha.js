const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input")
const message = document.querySelector(".message")
const submitButton = document.querySelector(".button")

let captchaText = null

const generateCaptchap = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("  ");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
};



const refreshBtnClick = () => {
    generateCaptchap();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if (captchaInputBox.value === "") message.classList.remove("active"); {
        
    }

};

const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

    message.classList.add("active");

    const captcha =document.getElementById('captcha');
    const submitButton =document.getElementById('submitButton')

    if (captchaInputBox.value === captchaText) {
        message.innerText = "Código válido. Redirigiendo...";
        message.style.color = "#6EC207"
        
        setTimeout( () => {
            captcha.style.display='none';
            submitButton.disabled=false;
        }, 3000);
        
    }else{
        message.innerText = "Código incorrecto, valide nuevamente.";
        message.style.color = "#FF2525"
    }
};

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);


generateCaptchap();