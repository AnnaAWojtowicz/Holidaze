import { apiUserProfilePath } from "./constants.js";

export async function getUserBookings() {
    const accessToken = localStorage.getItem('accessToken');
    const name = localStorage.getItem('userName');
    const response = await fetch(`${apiUserProfilePath}/${name}/bookings?_customer=true&_venue=true`, {
        headers: {
            Accept: "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data;
}