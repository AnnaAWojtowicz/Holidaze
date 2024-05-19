import BookStayModal from "../components/cardPage/BookStayModal";
import { apiVenueIdPath } from "./constants";

export async function bookStay({ dateFrom, dateTo, guests, venueId }) {
    const accessToken = localStorage.getItem('accessToken');

    const bodyObject = {
        dateFrom,
        dateTo,
        guests,
        venueId,
    };

    const response = await fetch(`${apiVenueIdPath}/?_customer=true&_venue=true`, {
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
