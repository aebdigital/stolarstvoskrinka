# Contact Form Setup

The contact form posts to `/.netlify/functions/contact`. The function verifies
Cloudflare Turnstile before sending the email through SMTP2GO.

## Required Netlify Environment Variables

- `CONTACT_FORM_RECIPIENT` - destination email for form submissions.
- `SMTP2GO_API_KEY` - API key from SMTP2GO.
- `SMTP2GO_SENDER` - verified sender address, for example `STOLÁRSTVO SKRINKA <noreply@stolarstvo.skrinka.sk>`.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile public site key.
- `TURNSTILE_SECRET_KEY` - Cloudflare Turnstile secret key. Never expose this value in client-side code.

Optional:

- `NEXT_PUBLIC_SITE_URL` - production site URL used for canonical URLs, sitemap and Open Graph metadata.

## Deployment Steps

1. Add the variables above in Netlify: Site settings -> Environment variables.
2. Make sure `SMTP2GO_SENDER` is verified in SMTP2GO.
3. In Cloudflare Turnstile, allow the production domain and any deploy-preview domains you want to test.
4. Deploy the site.
5. Test the form on `/kontakt` and in the footer.

The serverless function validates name, email, message, privacy consent and the
single-use Turnstile token before calling SMTP2GO.
