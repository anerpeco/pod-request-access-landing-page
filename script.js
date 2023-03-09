const submitBtnEl = document.querySelector(".form_btn");
const emailInputEl = document.querySelector(".email_input");

let emailValue = "";

let submitMessage = "";
let messageClass = "";
let messageContainer = document.createElement("div");
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const writeMessage = (mes, cl) => {
  messageContainer.innerHTML = `<p class="${cl}">${mes}</p>`;

  submitBtnEl.insertAdjacentElement("afterend", messageContainer);
};

const validEmail = () => {
  submitMessage = "Thanks for your subscription!";
  messageClass = "valid_email";
  writeMessage(submitMessage, messageClass);
};

const invalidEmail = () => {
  if (emailValue === "") {
    submitMessage = "Oops! Please enter an email address";
  } else {
    submitMessage = "Oops! Please check your email";
  }

  messageClass = "invalid_email";
  writeMessage(submitMessage, messageClass);
};

submitBtnEl.addEventListener("click", (e) => {
  emailValue = emailInputEl.value;

  if (emailValue.match(regex)) {
    validEmail();
    submitBtnEl.disabled = true;
  } else {
    invalidEmail();
    e.preventDefault();
  }
});
