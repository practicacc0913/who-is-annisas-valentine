const CORRECT_PASSWORD = "iloveyou"; // change this ❤️

function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("error-message");

    if (input === CORRECT_PASSWORD) {
        document.getElementById("password-gate").style.display = "none";
        document.getElementById("site-content").removeAttribute("hidden");
    } else {
        error.textContent = "wrong password 👀 try again";
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});
