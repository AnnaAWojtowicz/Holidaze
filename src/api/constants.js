// API entrypoint
const apiEntry = new URL("https://v2.api.noroff.dev");
export const apiEntryPath = apiEntry.toString();

// API register user
const apiRegisterUser = `${apiEntryPath}auth/register`;
export const apiRegisterUserPath = apiRegisterUser.toString();

// API login user
const apiLoginUser = `${apiEntryPath}auth/login`;
export const apiLoginUserPath = apiLoginUser.toString();




// main API path - get all venues
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


// API userProfile path
const apiUserProfile = `${apiPath}/profiles`;
export const apiUserProfilePath = apiUserProfile.toString();