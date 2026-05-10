const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
});

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { message: "Method not allowed." });
  }

  const recipient = process.env.CONTACT_FORM_RECIPIENT;
  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;

  if (!recipient || !apiKey || !sender) {
    return json(500, { message: "Kontaktný formulár nie je správne nakonfigurovaný." });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { message: "Neplatný formát požiadavky." });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const subject = String(payload.subject || "Nový dopyt z webu STOLÁRSTVO SKRINKA").trim();
  const message = String(payload.message || "").trim();
  const privacy = String(payload.privacy || "").trim();

  if (name.length < 2) {
    return json(400, { message: "Prosím, vyplňte meno." });
  }

  if (!isEmail(email)) {
    return json(400, { message: "Prosím, zadajte platný email." });
  }

  if (message.length < 10) {
    return json(400, { message: "Správa musí mať aspoň 10 znakov." });
  }

  if (privacy !== "accepted") {
    return json(400, { message: "Pre odoslanie je potrebný súhlas so spracovaním údajov." });
  }

  const textBody = [
    "Nová správa z webu STOLÁRSTVO SKRINKA",
    "",
    `Meno: ${name}`,
    `Email: ${email}`,
    `Predmet: ${subject || "Bez predmetu"}`,
    "",
    "Správa:",
    message
  ].join("\n");

  const htmlBody = `
    <h2>Nová správa z webu STOLÁRSTVO SKRINKA</h2>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Predmet:</strong> ${escapeHtml(subject || "Bez predmetu")}</p>
    <p><strong>Správa:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: apiKey,
        sender,
        to: [recipient],
        reply_to: email,
        subject: `STOLÁRSTVO SKRINKA web: ${subject || "Nový dopyt"}`,
        text_body: textBody,
        html_body: htmlBody
      })
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || result?.data?.error) {
      console.error("SMTP2GO error", result);
      return json(502, { message: "Správu sa nepodarilo odoslať. Skúste to prosím neskôr." });
    }

    return json(200, { message: "Ďakujeme, správa bola odoslaná." });
  } catch (error) {
    console.error("Contact function error", error);
    return json(500, { message: "Správu sa nepodarilo odoslať. Skúste to prosím neskôr." });
  }
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
