import { apiVenueIdPath } from "./constants";

export async function getBookingDetails(id) {
    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(`${apiVenueIdPath}/${id}?_customer=true&_venue=true`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}