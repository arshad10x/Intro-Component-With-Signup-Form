const error = document.querySelectorAll(".error");
const listError = Array.from(error);
const form = document.querySelector(".form");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", e => {
    if (form.fName.value === "") {
        listError[0].innerHTML = "First name cannot be empty";
        listError[0].classList.add("error-invalid");
        form.fName.classList.add("input-invalid");
        e.preventDefault();
    }

    if (form.lName.value === "") {
        listError[1].innerHTML = "Last name cannot be empty";
        listError[1].classList.add("error-invalid");
        form.lName.classList.add("input-invalid");
        e.preventDefault();
    }

    if (form.email.value === "") {
        listError[2].innerHTML = "Email cannot be empty";
        listError[2].classList.add("error-invalid");
        form.email.classList.add("input-invalid");
        e.preventDefault();
    }else if (!form.email.value.match(mailformat)) {
        listError[2].innerHTML = "Look likes this is not an email";
        listError[2].classList.add("error-invalid");
        form.email.classList.add("input-invalid-email");
        form.email.value = "";
        form.email.placeholder = "email@example.com";
        e.preventDefault();
    }


    if (form.password.value === "") {
        listError[3].innerHTML = "Password cannot be empty";
        listError[3].classList.add("error-invalid");
        form.password.classList.add("input-invalid");
        e.preventDefault();
    }


});