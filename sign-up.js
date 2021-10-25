/* 
Fields to enter password are hidden default by styling. This fields has to be displayed when a user verified his code.

1. Set an eventlistener to the verification button to listen if the button is pressed
2. When the button is pressed check if the verification code input field is hidden
3. If this field is hidden by the API, a user successfully verified  
4. The password input fields can be displayed now
*/

const changeEmailBtn = document.getElementById("email_ver_but_edit"); // Prod: email_ver_but_edit, test: emailVerificationControl_but_change_claims
const emailInputField = document.getElementsByClassName("EmailBox")[0];
const passwordElements = document.getElementsByClassName("Password");
const passwordContinueBtn = document.getElementById("continue");
const userAlreadyExistsMessage = document.getElementById("claimVerificationServerError");

function displayChangeEmailSection() {
    emailInputField.style.display = "inline";
    changeEmailBtn.style.display = "inline";
    changeEmailBtn.setAttribute("aria-hidden", "false");
}

function hideChangeEmailSection() {
    emailInputField.style.display = "none";
    changeEmailBtn.style.display = "none";
    changeEmailBtn.setAttribute("aria-hidden", "true");
}

function displayPasswordInputSection() {
    for (let i=0; i < passwordElements.length; i++) {
        const passwordElement = passwordElements[i];
        passwordElement.style.display = "inline";
    }

    passwordContinueBtn.style.display = "inline";
}

function hidePasswordInputSection() {
    for (let i=0; i < passwordElements.length; i++) {
        const passwordElement = passwordElements[i];
        passwordElement.style.display = "none";
    }

    passwordContinueBtn.style.display = "none";
}

function observeChangeEmailButton() {
    const changeEmailBtnObserver = new MutationObserver(function(mutations) {
    const ariaHiddenAttribute = changeEmailBtn.getAttribute("aria-hidden");
    console.log(ariaHiddenAttribute);

    if (ariaHiddenAttribute == "false") {
        hideChangeEmailSection();
        displayPasswordInputSection();
        observeUserAlreadyExistsMessage()
        changeEmailBtnObserver.disconnect();
    }
});

changeEmailBtnObserver.observe(changeEmailBtn, { 
    attributes: true, 
    attributeFilter: ['aria-hidden'] 
});
}

function observeUserAlreadyExistsMessage() {
const userAlreadyExistsMessageObserver = new MutationObserver(function(mutations) {
    const ariaHiddenAttribute = userAlreadyExistsMessage.getAttribute("aria-hidden");
    console.log(ariaHiddenAttribute);

    if (ariaHiddenAttribute == "false") {
        displayChangeEmailSection();
        hidePasswordInputSection();
        observeChangeEmailButton();
        userAlreadyExistsMessageObserver.disconnect();
    }
});

userAlreadyExistsMessageObserver.observe(userAlreadyExistsMessage, { 
    attributes: true, 
    attributeFilter: ['aria-hidden'] 
});
}

observeChangeEmailButton();