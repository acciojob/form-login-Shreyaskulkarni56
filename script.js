function getFormvalue(event) {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]').value.trim();
    let lastName = document.querySelector('[name="lname"]').value.trim();

    alert((firstName + " " + lastName).trim());
}
