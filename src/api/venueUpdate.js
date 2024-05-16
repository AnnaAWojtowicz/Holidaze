import { apiVenuesPath } from "./constants.js";

export async function addNewVenue(name, description, media, price, maxGuests, rating, meta, location) {
    const accessToken = localStorage.getItem('accessToken');
    const name = localStorage.getItem('userName');
    const bodyObject = {
        name,
        description,
        media,
        price,
        maxGuests,
        rating,
        meta,
        location
    }

    const response = await fetch(`${apiUserProfilePath}/${id}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(bodyObject),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }


    return data;


}