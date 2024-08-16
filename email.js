document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID
  emailjs.init("p2yE-jmL6t-1v5Gs4");

  // Get the form element
  const form = document.querySelector(".contact-form");

  // Add an event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = new FormData(form);

    // Prepare the email data
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      from_phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Send the email using EmailJS
    emailjs.send("service_exbgida", "template_5z091ve", templateParams).then(
      function (response) {
        alert("Message sent successfully!");
        form.reset(); // Reset the form fields after successful submission
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("Error sending email:", error);
      }
    );
  });
});
