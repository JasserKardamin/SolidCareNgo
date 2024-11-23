document.addEventListener("DOMContentLoaded", () => {
  const ToContactButton = document.querySelectorAll(".to-contact");
  const ToAboutUs = document.querySelector(".to-aboutus");
  const targetAboutUs = document.querySelector("#ToAboutUs");
  const targetContact = document.querySelector("#contact");

  ToAboutUs.addEventListener("click", (event) => {
    event.preventDefault();
    PerformScroll(targetAboutUs);
  });

  ToContactButton.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      PerformScroll(targetContact);
    });
  });

  PerformScroll = (target) => {
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
});
