function nameCorrect(word) {
  let res = word.split("");
  for (let i = 0; i < res.length; i++) {
    if (i === 0) {
      res[i] = res[i].toUpperCase();
    } else {
      res[i] = res[i].toLowerCase();
    }
  }
  return res.join("");
}
function nameValidation(value) {
  return value.length > 2 || value === "" ? "" : "too short ";
}
function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress === "") {
    return "";
  }
  if (!emailAdress.match(regexEmail)) {
    return "not valid email address";
  }
  return "";
}
function selectCountry(value) {
  const countries = require("./JSONS/countryCode.json");
  const res = countries.filter((elm) => {
    return elm.dial_code === value || elm.dial_code === "+" + value;
  })[0];

  return res ? `https://countryflags.io/${res.code}/shiny/64.png` : "";
}
function validatePhoneNumber(value) {
  if (isNaN(value[value.length - 1])) {
    return value.substring(0, value.length - 1);
  } else {
    return value;
  }
}
function validatePassword(value) {
  const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (value === "") {
    return "";
  }
  if (!value.match(regex)) {
    return "password not valid";
  }
  return "";
}

export {
  nameCorrect,
  nameValidation,
  validateEmail,
  selectCountry,
  validatePhoneNumber,
  validatePassword,
};
