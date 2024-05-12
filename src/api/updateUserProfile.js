import { apiUserProfilePath } from "./constants.js";

export async function updateUserProfile(avatar, bio, banner) {
    const accessToken = localStorage.getItem('accessToken');
    const name = localStorage.getItem('userName');
    const bodyObject = {
        avatar: {
            url: avatar,
            alt: "User Avatar",
        },
        bio,
        banner: {
            url: banner,
            alt: "User Banner",
        },
    }

    const response = await fetch(`${apiUserProfilePath}/${name}`, {
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