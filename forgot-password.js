const continueBtn = document.getElementById("continue");
const changeEmailBtn = document.getElementById("emailVerificationControl_but_change_claims");

function displayContinueButton() {
    continueBtn.style.display = "inline";
}

function observeChangeEmailButton() {
    console.log("observeChangeEmailButton");
    const changeEmailBtnObserver = new MutationObserver(function(mutations) {
        const ariaHiddenAttribute = changeEmailBtn.getAttribute("aria-hidden");
        console.log(ariaHiddenAttribute);

        if (ariaHiddenAttribute == "false") {
            displayContinueButton();
            changeEmailBtnObserver.disconnect();
        }
    }
)};

observeChangeEmailButton();