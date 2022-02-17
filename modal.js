function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("formField");
console.log(formData[0]);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
function validate() {
  const field = {
    firstName: document.getElementById("first").value,
    lastName: document.getElementById("last").value,
    eMail: document.getElementById("email").value,
    birthDate: document.getElementById("birthdate").value,
    quantityOfTournaments: document.getElementById("quantity").value,
    location1: document.getElementById("location1").value,
    location2: document.getElementById("location2").value,
    location3: document.getElementById("location3").value,
    location4: document.getElementById("location4").value,
    location5: document.getElementById("location5").value,
    location6: document.getElementById("location6").value,
  };

  const controleInput = (value) => {
    return /^[A-Za-z]{1,20}$/.test(value);
  };
  function controlFirstName() {
    if (controleInput(field.firstName)) {
      return true;
    } else {
      alert(
        "Veuillez remplir le champ avec un prénom valide pour pouvoir continuer"
      );
      return false;
    }
  }
  function controlLastName() {
    if (controleInput(field.lastName)) {
      return true;
    } else {
      alert(
        "Veuillez remplir le champ avec un nom valide pour pouvoir continuer"
      );
      return false;
    }
  }
  function controlEmail() {
    if (
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(field.eMail) &&
      field.eMail.length > 1
    ) {
      return true;
    } else {
      alert(
        "Veuillez remplir le champ avec un email valide pour pouvoir continuer"
      );
      return false;
    }
  }
  function controlBirthDate() {
    if (field.birthDate.length < 1) {
      alert(
        "Veuillez remplir le champ avec une date de naissance valide pour pouvoir continuer"
      );
      return false;
    }
  }
  //Calling Function//
  controlFirstName();
  controlLastName();
  controlEmail();
  controlBirthDate();
}
