// Add interactivity

// Show alert when clicking project button
function showAlert() {
  alert("Project details coming soon!");
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert("Thank you for your message, " + name + "!");
});
