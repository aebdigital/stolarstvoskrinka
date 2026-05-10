export function initForms() {
  document.querySelectorAll("form[data-netlify-contact]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const message = form.querySelector("[data-form-message]");
      const submit = form.querySelector("button[type='submit']");
      const data = Object.fromEntries(new FormData(form).entries());

      if (message) {
        message.textContent = "Odosielame správu...";
        message.dataset.state = "loading";
      }

      if (submit) submit.disabled = true;

      try {
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        const result = await response.json();

        if (!response.ok) throw new Error(result.message || "Správu sa nepodarilo odoslať.");

        form.reset();
        if (message) {
          message.textContent = result.message || "Ďakujeme, správa bola odoslaná.";
          message.dataset.state = "success";
        }
      } catch (error) {
        if (message) {
          message.textContent = error instanceof Error ? error.message : "Správu sa nepodarilo odoslať.";
          message.dataset.state = "error";
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}
