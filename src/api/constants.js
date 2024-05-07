// main APII path 
const apiUrl = new URL("https://v2.api.noroff.dev/holidaze");
export const apiPath = apiUrl.toString();

// API venues path
const apiVenues = `${apiUrl}/venues`;
export const apiVenuesPath = apiVenues.toString();

// API venuues with id path
const apiVenuesId = `${apiVenues}/id`;
export const apiVenuesIdPath = apiVenuesId.toString();

// API venues search path
const apiVenuesSearch = `${apiVenues}/search?q=`;
export const apiVenuesSearchPath = apiVenuesSearch.toString();
