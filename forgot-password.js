const continueBtn = document.getElementById("continue");
const changeEmailBtn = document.getElementById("email_ver_but_edit");

function displayContinueButton() {
    continueBtn.style.display = "inline";
}

function observeChangeEmailButton() {
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