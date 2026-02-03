$(function () {
  const ratePerHour = 25.0;
  const $totalOutput = $("#totalOutput");
  const modal = document.getElementById("calcCelebration");
  const closeBtn = modal?.querySelector(".gif-modal-close");
  const backdrop = modal?.querySelector(".gif-modal-backdrop");
  const modalTotal = document.getElementById("calcModalTotal");
  let modalTimer = null;

  function formatMoney(amount) {
    return "$" + amount.toFixed(2);
  }

  function showModalWithDelay(total) {
    if (!modal) return;
    modalTotal && (modalTotal.textContent = formatMoney(total));

    window.clearTimeout(modalTimer);
    modalTimer = window.setTimeout(() => {
      modal.classList.add("is-visible");
      modal.setAttribute("aria-hidden", "false");
    }, 900);
  }

  function hideModal() {
    if (!modal) return;
    window.clearTimeout(modalTimer);
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  }

  $("#calcBtn").on("click", function () {
    const hoursRaw = $("#hoursInput").val();
    const hours = Number(hoursRaw);

    if (!hoursRaw || hours <= 0) {
      $totalOutput.val("");
      hideModal();
      return;
    }

    const total = hours * ratePerHour;
    $totalOutput.val(formatMoney(total));
    showModalWithDelay(total);
  });

  closeBtn?.addEventListener("click", hideModal);
  backdrop?.addEventListener("click", hideModal);
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  });
});
