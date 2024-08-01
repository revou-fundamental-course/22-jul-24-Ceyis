// Ini java script

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    
    if (n > imgList.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = imgList.length;
    }

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";  
    }

    imgList[slideIndex - 1].style.display = "block";  
}

// otomatis ganti gambar setiap 2 detik
// setInterval(() => {
//     plusDivs(1);
// }, 2000);


// Form validasi
function validateForm(event) {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var country = document.getElementById("country").value;
  
    clearErrors();
  
    var isValid = true;
  
    if (fname === "") {
      showError("fname", "*first name must be filled out");
      isValid = false;
    }
    if (lname === "") {
      showError("lname", "*last name must be filled out");
      isValid = false;
    }
    if (country === "") {
      showError("country", "*please select your country");
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault();
    } else {
      alert("Form submitted successfully!");
    }
  }
  
  function clearErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (msg) {
      msg.remove();
    });
  }
  
  function showError(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.innerText = message;
    inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
  }
  