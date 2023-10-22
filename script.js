document.addEventListener("DOMContentLoaded", function () {
    const formStart = document.getElementById("section1");
    const formComplete = document.getElementById("section2");
    const subscribeButton = document.getElementById("button__submit");
    const dismissButton = document.getElementById("button__dismiss");
    const email = document.getElementById("email");
    const spanEmail = document.getElementById("span__email");
    const valid = document.getElementById("label__valid")
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    subscribeButton.addEventListener("click", function () {
        if (validateEmail(email.value)) {
            formStart.style.display = "none";
            formComplete.style.display = "grid";
            spanEmail.textContent=email.value;
            email.setAttribute("data-valid","true");
            valid.setAttribute("data-valid","true");
        } else {
            email.setAttribute("data-valid","false");
            valid.setAttribute("data-valid","false");
        }

    });

    dismissButton.addEventListener("click", function () {
        formStart.style.display = "flex";
        formComplete.style.display = "none";
    });
});
