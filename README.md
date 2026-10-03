# Nocturne — Vampire Night Club Guest List

A fictional sign-up form for a vampire nightclub that opens after sunset. Built with HTML, CSS, and a little JavaScript. No installation or build step is required.

## Run

Download `index.html`, `styles.css`, and `script.js` into the same folder and open `index.html` in a browser. An internet connection is needed only to submit the demo form.

## Mastery checklist

The form contains **11 required control types**, with more than 8 individual controls:

| Requirement | Implementation |
| --- | --- |
| Text | `alias`; detached `bat-contact` |
| Radio | Three welcome-drink choices, sharing `name="welcome_drink"` |
| Checkbox | Three optional perks and required night-rules agreement |
| Email | `email`, with native email validation |
| Date/datetime | `arrival`, using `type="datetime-local"` |
| Number | `age` (18–5000) and `party-size` (1–6) |
| Range | `garlic` (0–10), with a live reading |
| File upload | `portrait`, accepting PNG, JPEG, and WebP |
| Color | `cape`, with a live hexadecimal value |
| Select | `circle`, offering three membership circles |
| Textarea | `requests`, up to 600 characters |
| Labels | Every data input, select, and textarea has a matching `<label for="…">` and unique `id` |
| Names | All inputs, select, textarea, output, and submit buttons have `name` attributes |
| GET | `<form method="get" action="https://httpbin.org/get">`; Preview invitation uses `formmethod="get"` |
| POST | Join guest list uses `formmethod="post"`, `formaction="https://httpbin.org/post"`, and `formenctype="multipart/form-data"` |
| Creative `formaction` | Ask the Bat Concierge sends the same form to `https://httpbin.org/anything/nocturne-bat-concierge` by POST, representing a fictional coffin pickup request |
| Outside-form input | `bat-contact` is physically outside `<form>` and uses `form="guest-list"`; its value is included in both GET and POST |

HTML uses `method` on the **form** and `formmethod` on submit buttons. The JavaScript does not intercept or replace native submission.

## Behavior

- Native validation enforces required fields, email format, text length, and numeric limits.
- Arrival must be between 20:00 and 05:59 in the fictional castle's local time.
- GET sends values in the query string; a file input contributes its filename.
- POST uses multipart encoding, so an uploaded file is included in the request body.
- Each result opens in a new tab, keeping the form available.
- The page adapts to small screens and supports keyboard navigation.

This is a demo: use invented names, example email addresses, and sample images. [httpbin](https://httpbin.org/) echoes requests; it does not register guests or book real services.

[HTML submit-button reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/submit)

The repository's existing `LICENSE` applies.
