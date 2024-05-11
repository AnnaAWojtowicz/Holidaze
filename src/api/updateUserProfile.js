import { apiLoginUserPath } from "./constants";

export async function updateUserProfile(url, alt, bio) {
    const response = await fetch(apiLoginUserPath, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            url,
            alt,
            bio,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }


    return data;
}