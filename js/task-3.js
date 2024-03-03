document.getElementById("name-input").addEventListener("input", function () {
  let name = this.value.trim();
  let outputSpan = document.getElementById("name-output");

  if (name === "") {
    outputSpan.textContent = "Anonymous";
  } else {
    outputSpan.textContent = name;
  }
});
