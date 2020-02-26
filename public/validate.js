function validate(prefix) {
    var username = document.getElementById(prefix + 'username').value;
    var password = document.getElementById(prefix + 'password').value;
    var email = document.getElementById(prefix + 'email').value;
    var organization = document.getElementById(prefix + 'organization').value;

    var genders = document.getElementsByName(prefix + 'gender')
    var gender = "";
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) gender = genders[i].value;
    }

    var err = "";

    if (username == "") err += "Missing username.<br />"
    if (password == "") err += "Missing password.<br />"
    if (email == "") err += "Missing email.<br />"
    else if (!/^.+@.+\..{2,4}$/.test(email)) err += "Wrong email.<br />"
    if (organization == "") err += "Missing organization.<br />"
    if (gender == "") err += "Missing gender.<br />"
    if (err == "") return true;

    var error = document.getElementById('error')
    error.innerHTML = err;
    error.style.color = "red"

    return false;
}