// Edit these values before deploying.
window.ORBCAST = {
  // HLS playlist of the 24/7 program (from the Orbcast program server)
  HLS_URL: "",
  // Link to the X live broadcast used for overflow viewers
  X_URL: "https://x.com/",
  // Max simultaneous viewers on the watch page before overflow to X
  VIEWER_CAP: 100,
  // Endpoint that counts live viewers. Page POSTs {id} every 20s and expects {count}.
  // Leave empty to skip counting (everyone gets the player).
  VIEWER_COUNT_URL: "",
  // Where the forms send their data (Supabase edge function, Formspree, etc.)
  FORM_ENDPOINT: ""
};
