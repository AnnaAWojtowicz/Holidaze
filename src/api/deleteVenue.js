import { apiVenuesPath } from "./constants.js";

export async function deleteVenue(id) {

    const accessToken = localStorage.getItem('accessToken');


    const response = await fetch(`${apiVenuesPath}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message)
    }
}