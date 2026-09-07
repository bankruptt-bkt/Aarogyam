document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("portalLoginForm");
  const statusMessage = document.getElementById("statusMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const mobile = document.getElementById("mobileNumber").value.trim();
      const bill = document.getElementById("billId").value.trim();

      // Show temporary processing state
      statusMessage.className = "status-box info";
      statusMessage.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Searching records for <strong>${mobile}</strong>...`;

      // Mock delay to demonstrate portal transition before Firebase integration
      setTimeout(() => {
        statusMessage.innerHTML = `
          <i class="fa-solid fa-circle-check"></i> Found reports matching <strong>${mobile}</strong>! 
          <br><small>(Connect Firebase Auth / Firestore here to pull actual PDF files)</small>
        `;
      }, 1500);
    });
  }
});
