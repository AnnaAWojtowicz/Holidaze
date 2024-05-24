import { apiUserProfilePath } from "./constants.js";

export async function getUserVenues(userName) {
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(`${apiUserProfilePath}/${userName}/venues?_owner=true`, {
        headers: {
            Accept: "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data;
}