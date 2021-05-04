var send = document.getElementById("contact_send");
send.addEventListener("click", () => {
  let name = document.getElementById("contact_name");
  let email = document.getElementById("contact_email");
  let message = document.getElementById("contact_message");
  if (name.value && email.value && message.value) {
    let msg = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(msg);
    let url = "https://notks-portfolio-email-service.herokuapp.com/";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(msg),
    })
      .then((date) => {
        console.log("done");
        alert("Your email is sent!");
        name.value = "";
        email.value = "";
        message.value = "";
      })
      .catch((e) => {
        console.log("error");
      });
  }
  if (name.value === "") {
    name.classList.add("error");
  }
  if (email.value === "") {
    email.classList.add("error");
  }
  if (message.value === "") {
    message.classList.add("error");
  }
});

var nameobj = document.getElementById("contact_name");

nameobj.addEventListener("click", () => {
  nameobj.classList.remove("error");
});
let emailobj = document.getElementById("contact_email");

emailobj.addEventListener("click", () => {
  emailobj.classList.remove("error");
});
let messageobj = document.getElementById("contact_message");

messageobj.addEventListener("click", () => {
  messageobj.classList.remove("error");
});
