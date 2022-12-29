const formName = document.getElementById("Name");
const formNumber = document.getElementById("Number");
const formEmail = document.getElementById("Email");
const formMessage = document.getElementById("Message");
const newsletterEmail = document.getElementById("Newsletter-Email");

function submitForm() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "meabhi224@gmail.com",
    Password: "1691792F23190C3A294164253CCA9F19B891",
    To: "meabhi224@gmail.com",
    From: "abhishekshrestha416@gmail.com",
    Subject: "New Contact Form Response",
    Body:
      "Name: " +
      formName.value +
      "<br>Email: " +
      formEmail.value +
      "<br>Number: " +
      formNumber.value +
      "<br>Message: " +
      formMessage.value,
  }).then((message) => alert("Message Sent Sucessfully"));
  // document.getElementsByTagName("form").reset();
}

function submitNewsletter() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "meabhi224@gmail.com",
    Password: "1691792F23190C3A294164253CCA9F19B891",
    To: "meabhi224@gmail.com",
    From: "abhishekshrestha416@gmail.com",
    Subject: "Newsletter Response",
    Body: "Email: " + newsletterEmail.value,
  }).then((message) => alert("Message Sent Sucessfully"));
  // document.getElementsByTagName("form").reset();
}
