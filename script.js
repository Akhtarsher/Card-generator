var formData = document.getElementById("form-data");

formData.onsubmit = function (e) {
    e.preventDefault();
    var name = document.getElementById("inputName").value;
    var fatherName = document.getElementById('inputFname').value;
    var cnic = document.getElementById('inputCnic').value;
    var email = document.getElementById('inputEmail').value;
    var course = document.getElementById('course').value;

    // Get the selected file
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    var reader = new FileReader();

    reader.onload = function (e) {
        var src = e.target.result; // Get the data URL of the image

        // Create a div element
        let card = document.createElement("div");
        card.classList.add("card");

        let heading = document.createElement("h1")
        heading.textContent = "SAYLANI MASS IT TRAINING PROGRAM";
        heading.classList.add("heading")

        // Create an image element
        var image = document.createElement('img');
        image.src = src;
        image.classList.add('img');

        let myName = document.createElement("h1")
        myName.textContent = name;
        myName.classList.add("para")

        let myFatherName = document.createElement("p")
        myFatherName.textContent = "S/O: " + fatherName;

        let myCnic = document.createElement("p");
        myCnic.textContent = "CNIC: " + cnic;

        let myEmail = document.createElement("p");
        myEmail.textContent = "Email: " + email;

        let myCourse = document.createElement("p");
        myCourse.textContent = "Course: " + course;



        card.append(heading)
        card.appendChild(document.createElement("br"))

        card.appendChild(image); // Append the image element to the card
        card.appendChild(document.createElement("br"))

        card.append(myName)
        card.appendChild(document.createElement("br"))

        card.append(myFatherName)
        card.appendChild(document.createElement("br"))

        card.append(myCnic)
        card.appendChild(document.createElement("br"))

        card.append(myEmail)
        card.appendChild(document.createElement("br"))


        card.append(myCourse)
        card.appendChild(document.createElement("br"))

        formData.style.display = "none"
        document.getElementById('cardContainer').appendChild(card);
    };

    if (file) {
        reader.readAsDataURL(file); // Read the selected file as a Data URL
    }
}
