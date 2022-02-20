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
    firstName: {
      value: document.getElementById("first").value,
      errorMessage:
        "Veuillez remplir le champ avec un prénom valide pour pouvoir continuer",
    },
    lastName: {
      value: document.getElementById("last").value,
      errorMessage:
        "Veuillez remplir le champ avec un nom valide pour pouvoir continuer",
    },
    eMail: {
      value: document.getElementById("email").value,
      errorMessage:
        "Veuillez remplir le champ avec un email valide pour pouvoir continuer",
    },
    birthDate: {
      value: document.getElementById("birthdate").value,
      errorMessage:
        "Veuillez remplir le champ avec une date de naissance valide pour pouvoir continuer",
    },
    quantityOfTournaments: { value: document.getElementById("quantity").value },
    location1: { value: document.getElementById("location1").value },
    location2: { value: document.getElementById("location2").value },
    location3: { value: document.getElementById("location3").value },
    location4: { value: document.getElementById("location4").value },
    location5: { value: document.getElementById("location5").value },
    location6: { value: document.getElementById("location6").value },
  };
  const controleInput = (value) => {
    return /^[A-Za-z]{1,20}$/.test(value);
  };
  function controlFirstName() {
    if (controleInput(field.firstName.value)) {
      formData[0].removeAttribute("data-error");
      formData[0].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[0].dataset.errorVisible = "true";
      formData[0].dataset.error = field.firstName.errorMessage;
      return false;
    }
  }
  function controlLastName() {
    if (controleInput(field.lastName.value)) {
      formData[1].removeAttribute("data-error");
      formData[1].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[1].dataset.errorVisible = "true";
      formData[1].dataset.error = field.lastName.errorMessage;
      return false;
    }
  }
  function controlEmail() {
    if (
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(field.eMail.value)
    ) {
      formData[2].removeAttribute("data-error");
      formData[2].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[2].dataset.errorVisible = "true";
      formData[2].dataset.error = field.eMail.errorMessage;
      return false;
    }
  }

  function controlBirthDate() {
    if (
      /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(
        field.birthDate.value
      )
    ) {
      formData[3].removeAttribute("data-error");
      formData[3].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[3].dataset.errorVisible = "true";
      formData[3].dataset.error = field.birthDate.errorMessage;
      return false;
    }
  }
  function controlQuantityOfTournaments() {
    if (/^[0-9]+$^/.test(field.quantityOfTournaments.value)) {
      return true;
    } else {
      return false;
    }
  }
  //Calling Function//
  controlFirstName();
  controlLastName();
  controlEmail();
  controlBirthDate();
  controlQuantityOfTournaments();
}
