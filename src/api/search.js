import { apiVenuesPath } from '../api/constants';

export const searchVenues = async (inputValue, currentPage) => {
    const fetchUrl = inputValue
        ? `${apiVenuesPath}/search?q=${inputValue}`
        : `${apiVenuesPath}?limit=9&page=${currentPage}`;
    try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API request failed:', error);
    }
}