// ================= REGISTER =================

function registerUser(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    localStorage.setItem(
        "customerName",
        name
    );

    localStorage.setItem(
        "customerEmail",
        email
    );


    alert(
        "Account created successfully!\n\n" +
        "Welcome to Shiva Putra International Bank."
    );


    window.location.href =
        "login.html";
}



// ================= LOGIN =================

function loginUser(event) {

    event.preventDefault();


    let username =
        document.getElementById("loginUser").value;

    let password =
        document.getElementById("loginPassword").value;


    if (username === "" || password === "") {

        alert(
            "Please enter your login details."
        );

        return;
    }


    alert(
        "Login successful!\n\n" +
        "Welcome to Shiva Putra International Bank."
    );


    window.location.href =
        "dashboard.html";
}



// ================= LOAN =================

function applyLoan(loanType) {

    alert(
        "You selected " +
        loanType +
        ".\n\n" +
        "Please login to continue your loan application."
    );


    window.location.href =
        "login.html";
}



// ================= CARD =================

function requestCard() {

    alert(
        "Your card request has been submitted successfully!"
    );
}



// ================= CONTACT =================

function sendMessage(event) {

    event.preventDefault();


    alert(
        "Thank you for contacting " +
        "Shiva Putra International Bank.\n\n" +
        "We will get back to you soon."
    );
}