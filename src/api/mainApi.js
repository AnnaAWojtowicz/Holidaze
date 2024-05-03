const apiUrl = new URL("https://v2.api.noroff.dev/holidaze/venues");
const apiPath = apiUrl.toString();

export async function getVenues() {
    try {
        const response = await fetch(apiPath);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}