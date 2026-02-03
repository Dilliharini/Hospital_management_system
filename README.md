# Hospital Management System — Doctor Schedule (Demo)

This is a simple client-side demo for Scenario 1: Hospital Management System.

What it includes
- `index.html` — main UI with doctors table and booking form
- `css/styles.css` — basic styles
- `js/app.js` — client-side logic: populate schedule, validate bookings, update availability

How to run locally
1. Open `index.html` in your browser (double-click or open via browser "Open File").
2. From the schedule page click the "BOOK AN APPOINTMENT" button to open the separate booking page (`book.html`).
3. The app runs in the browser. Bookings are kept in memory and cleared on reload.

How to upload to GitHub
1. Initialize a git repo (if not already):

```bash
git init
git add .
git commit -m "Add Hospital Management demo: schedule and booking UI"
```

2. Create a repository on GitHub, then add remote and push:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

Replace `<your-username>` and `<repo-name>` with your GitHub details.

Notes
- This demo is client-only for learning and UI purposes. For production you'd add a backend and persistent storage.
