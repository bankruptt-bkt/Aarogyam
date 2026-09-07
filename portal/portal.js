document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("portalLoginForm");
  const statusBox = document.getElementById("statusMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Get input values
      const mobile = document.getElementById("mobileNumber").value.trim();
      const billId = document.getElementById("billId").value.trim();

      // Show processing status
      statusBox.className = "status-box show";
      statusBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Fetching records for <strong>${mobile}</strong>...`;

      // Simulate a network request (Mock Demo)
      setTimeout(() => {
        statusBox.innerHTML = `
          <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Records found for <strong>${mobile}</strong>!<br>
          <small style="color: #6b7280;">(Connect Firebase to display your test reports)</small>
        `;
      }, 1200);
    });
  }
});
