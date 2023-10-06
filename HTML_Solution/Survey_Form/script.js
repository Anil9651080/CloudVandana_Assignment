function submitForm() {
    // Perform form validation here
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = [...document.getElementsByName("gender")].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Check if all fields are filled
    if (firstName === "" || lastName === "" || dob === "" || country === "" || gender.length === 0 || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all fields");
        return false;
    }

    // Display the popup with form data
    var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(", ")}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
    document.getElementById("popup-content").innerHTML = popupContent;
    document.getElementById("popup").style.display = "block";

    // Reset the form
    document.getElementById("survey-form").reset();

    return false;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
