import { testEmail, testPassword, testName, venueToCreate } from "../../../setupTests";
import { login } from "../../../api/login";
import { addNewVenue } from "../../../api/addNewVenue";
import { getUserVenues } from "../../../api/getUserVenues";
import { updateVenue } from "../../../api/updateVenue";
import { deleteVenue } from "../../../api/deleteVenue";

describe("venue", () => {

    let venueResponse;

    beforeAll(async () => {
        await login(testEmail, testPassword);
        venueResponse = await addNewVenue(venueToCreate);
    });

    it("add new venue", async () => {
        expect(venueResponse.data.name).toMatch(venueToCreate.name);
        expect(venueResponse.data.description).toMatch(venueToCreate.description);
        expect(venueResponse.data.price).toBe(venueToCreate.price);
        expect(venueResponse.data.maxGuests).toBe(venueToCreate.maxGuests);
        expect(venueResponse.data.media).toEqual(venueToCreate.media);
        expect(venueResponse.data.rating).toBe(venueToCreate.rating);
        expect(venueResponse.data.meta).toEqual(venueToCreate.meta);
        expect(venueResponse.data.location.address).toEqual(venueToCreate.location.address);
        expect(venueResponse.data.location.city).toEqual(venueToCreate.location.city);
        expect(venueResponse.data.location.country).toEqual(venueToCreate.location.country);
    });

    it("get user venues", async () => {
        const userVenuesResponse = await getUserVenues(testName);
        expect(userVenuesResponse.data.length).toBeGreaterThan(0);
        expect(userVenuesResponse.data[0].id).not.toBeNull();
    });

    it("update venue", async () => {
        const updatedVenueResponse = await updateVenue(venueResponse.data);
        expect(updatedVenueResponse.data.name).toMatch(venueToCreate.name);
        expect(updatedVenueResponse.data.description).toMatch(venueToCreate.description);
        expect(updatedVenueResponse.data.price).toBe(venueToCreate.price);
        expect(updatedVenueResponse.data.maxGuests).toBe(venueToCreate.maxGuests);
        expect(updatedVenueResponse.data.media).toEqual(venueToCreate.media);
        expect(updatedVenueResponse.data.rating).toBe(venueToCreate.rating);
        expect(updatedVenueResponse.data.meta).toEqual(venueToCreate.meta);
        expect(updatedVenueResponse.data.location.address).toEqual(venueToCreate.location.address);
        expect(updatedVenueResponse.data.location.city).toEqual(venueToCreate.location.city);
        expect(updatedVenueResponse.data.location.country).toEqual(venueToCreate.location.country);
    });

    /*
    Delete created venue after all tests are 
    done and make sure no errors are thrown
    */
    afterAll(async () => {
        try {
            await deleteVenue(venueResponse.data.id);
        } catch (error) {
            expect(error).toBeNull();
        }
    });
});