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
  //Get value from the DOM and add error message//
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
    quantityOfTournaments: {
      value: document.getElementById("quantity").value,
      errorMessage:
        "Veuillez remplir le champ avec un nombre valide pour pouvoir continuer",
    },
    location: {
      location1: { value: document.getElementById("location1").checked },
      location2: { value: document.getElementById("location2").checked },
      location3: { value: document.getElementById("location3").checked },
      location4: { value: document.getElementById("location4").checked },
      location5: { value: document.getElementById("location5").checked },
      location6: { value: document.getElementById("location6").checked },
      errorMessage: "Veuillez sélectionner la ville où vous voulez participer",
    },
    charte: {
      value: document.getElementById("checkbox1").checked,
      errorMessage:
        "Veuillez accepter nos conditions d'utilisation avant de pouvoir continuer",
    },
  };
  //checking regex for each input //
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
    if (/^[0-9]$|^[1-9][0-9]$|^(99)$/.test(field.quantityOfTournaments.value)) {
      formData[4].removeAttribute("data-error");
      formData[4].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[4].dataset.errorVisible = "true";
      formData[4].dataset.error = field.quantityOfTournaments.errorMessage;
      return false;
    }
  }

  function controlLocation() {
    if (
      (field.location.location1.value ||
        field.location.location2.value ||
        field.location.location3.value ||
        field.location.location4.value ||
        field.location.location5.value ||
        field.location.location6.value) === true
    ) {
      formData[5].removeAttribute("data-error");
      formData[5].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[5].dataset.errorVisible = "true";
      formData[5].dataset.error = field.location.errorMessage;
      return false;
    }
  }
  function controlCharte() {
    if (field.charte.value === true) {
      formData[6].removeAttribute("data-error");
      formData[6].removeAttribute("data-error-visible");
      return true;
    } else {
      formData[6].dataset.errorVisible = "true";
      formData[6].dataset.error = field.charte.errorMessage;
    }
  }
  //Calling Function//

  controlFirstName();
  controlLastName();
  controlEmail();
  controlBirthDate();
  controlQuantityOfTournaments();
  controlLocation();
  controlCharte();
  //Confirmation message//
  if (
    (controlFirstName() &&
      controlLastName() &&
      controlEmail() &&
      controlBirthDate() &&
      controlQuantityOfTournaments() &&
      controlLocation() &&
      controlCharte()) == true
  ) {
    const blockConfirm = document.getElementById("confirmation-block");

    blockConfirm.style.display = "block";
    setTimeout(closeConfirm, 5000);
    function closeConfirm() {
      return (
        (blockConfirm.style.display = "none"), (modalbg.style.display = "none") //window.reload()//
      );
    }
    return true;
  } else {
    return false;
  }
}
