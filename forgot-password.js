const continueBtn = document.getElementById("continue");
const changeEmailBtn = document.getElementById("emailVerificationControl_but_change_claims");

function displayContinueButton() {
    continueBtn.style.display = "inline";
}

function hideChangeEmailButton() {
    changeEmailBtn.style.display = "none";
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

observeChangeEmailButton();