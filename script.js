document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for registering with Prodigy Infotech!");
  this.reset();
});
