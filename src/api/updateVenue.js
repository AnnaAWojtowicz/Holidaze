import { apiVenuesPath } from "./constants.js";

export async function updateVenue(id, data) {
    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(`${apiVenuesPath}/${id}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.message)
    }


    return responseData;


}