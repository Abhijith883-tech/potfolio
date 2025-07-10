
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    navbar.classList.toggle("active");
  };


// my-potfolio-11.netlify.app

// function sendMail() {
//     let parms={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         mobile:document.getElementById("mobile").value,
//         message:document.getElementById("message").value,
//     }
//     emailjs.send("service_3o7hehr","template_0mt928m",parms).then(alert("Email Send"))
// }

function emailSend() {
    Email.send({
        Host: "s1.maildns.net",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

