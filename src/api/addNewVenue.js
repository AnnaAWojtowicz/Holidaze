import { apiVenuesPath } from "./constants.js";

export async function addNewVenue({
    name = "",
    description = "",
    media = [],
    price = "",
    maxGuests = "",
    rating = "",
    meta: {
        wifi = false,
        parking = false,
        breakfast = false,
        pets = false
    } = {},
    location: venueLocation = {}
}) {
    const { address = "", city = "", country = "" } = venueLocation;
    const accessToken = localStorage.getItem('accessToken');
    const bodyObject = {
        name,
        description,
        media,
        price: Number(price),
        maxGuests: Number(maxGuests),
        rating: Number(rating),
        meta: {
            wifi,
            parking,
            breakfast,
            pets,
        },
        location: {
            address,
            city,
            country
        },
    };

    const response = await fetch(`${apiVenuesPath}`, {
        method: 'POST',
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

