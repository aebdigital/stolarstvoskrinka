document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form[data-netlify-contact]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const message = form.querySelector("[data-form-message]");
      const submit = form.querySelector("button[type='submit']");

      if (message) message.textContent = "Odosielame správu...";
      if (submit) submit.disabled = true;

      try {
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Správu sa nepodarilo odoslať.");
        form.reset();
        if (message) message.textContent = result.message || "Ďakujeme, správa bola odoslaná.";
      } catch (error) {
        if (message) message.textContent = error instanceof Error ? error.message : "Správu sa nepodarilo odoslať.";
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
});
