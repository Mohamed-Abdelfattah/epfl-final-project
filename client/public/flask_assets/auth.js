console.log("current page: " + document.title);

if (document.title === "Log In") {
  const errorBanner = document.getElementsByClassName("error-banner")[0];
  const closeErrorBanner = errorBanner.querySelector("span:last-child");

  closeErrorBanner.addEventListener("click", () => {
    errorBanner.classList.add("hidden");
  });
}

if (document.title === "Sign Up") {
  const selectElement = document.getElementsByTagName("select")[0];
  const selectLabel = selectElement.nextElementSibling;

  selectElement.addEventListener("change", () => {
    console.log(selectElement.value);
    console.log(selectLabel);
    if (selectElement.value !== "") {
      selectLabel.classList.add("populated");
    }
    if (selectElement.value === "") {
      selectLabel.classList.remove("populated");
    }
  });
}
