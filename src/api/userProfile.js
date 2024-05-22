import { apiUserProfilePath } from "./constants.js";

export async function getUserProfile(userName) {
    const accessToken = localStorage.getItem('accessToken');

    const response = await fetch(`${apiUserProfilePath}/${userName}?_venues=true`, {
        method: 'get',
        headers: {
            Accept: "application/json",
            "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${accessToken}`,
        },
    },
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data;
};