const continueBtn = document.getElementById("continue");
const changeEmailBtn = document.getElementById("emailVerificationControl_but_change_claims");
// const changeEmailBtn = document.getElementById("email_ver_but_edit");

function displayContinueButton() {
    continueBtn.style.display = "inline";
}

function hideChangeEmailButton() {
    changeEmailBtn.style.display = "none";
    changeEmailBtn.setAttribute("aria-hidden", "true");
}

function observeChangeEmailButton() {
    const changeEmailBtnObserver = new MutationObserver(function(mutations) {
        const ariaHiddenAttribute = changeEmailBtn.getAttribute("aria-hidden");
        console.log(ariaHiddenAttribute);

        if (ariaHiddenAttribute == "false") {
            hideChangeEmailButton();
            displayContinueButton();
            changeEmailBtnObserver.disconnect();
        }
    });

    changeEmailBtnObserver.observe(changeEmailBtn, { 
        attributes: true, 
        attributeFilter: ['aria-hidden'] 
    });
}

function checkIfObserverNeedsToBeSet() {
    /* 
    If the password reset user flow is loaded for the first time the grower has to verify his email adress.
    In that case the changeEmailBtn is found and has to be observed.
    When a user verified his email adress the user flow will be loaded for a second time, but than to fill in a new password.
    In that case no changeEmailBtn will be found, so it doesn't need to be observed. 
    The continue button must be displayed, so a user can continue after entering a new password.
    */

    if (changeEmailBtn != null) {
        console.log("change email button")
        observeChangeEmailButton();
    } else {
        console.log("display continue button")
        displayContinueButton();
    }
}

checkIfObserverNeedsToBeSet();