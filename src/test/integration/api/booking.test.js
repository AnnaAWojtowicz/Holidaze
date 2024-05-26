import { testEmail, testPassword, venueToCreate } from "../../../setupTests";
import { login } from "../../../api/login";
import { addNewVenue } from "../../../api/addNewVenue";
import { bookStay } from "../../../api/bookStay";
import { getBookingDetails } from "../../../api/bookingDetails";
import { getUserBookings } from "../../../api/getUserBookings";
import { deleteVenue } from "../../../api/deleteVenue";

describe("booking", () => {

    let createVenueResponse;
    let createBookingResponse;

    beforeAll(async () => {
        try {
            await login(testEmail, testPassword);
            createVenueResponse = await addNewVenue(venueToCreate);
        } catch (error) {
            expect(error).toBeNull();
        }
    });

    it("book stay", async () => {
        const dateFrom = "2024-08-08";
        const dateTo = "2025-09-09";
        const guests = 4;
        const venueId = createVenueResponse.data.id;

        createBookingResponse = await bookStay({ dateFrom, dateTo, guests, venueId });

        expect(createBookingResponse.data.id).not.toBeNull();
        expect(createBookingResponse.data.dateFrom).toMatch(dateFrom);
        expect(createBookingResponse.data.dateTo).toMatch(dateTo);
        expect(createBookingResponse.data.guests).toBe(guests);
        expect(createBookingResponse.data.created).not.toBeNull();
        expect(createBookingResponse.data.updated).not.toBeNull();
    });

    it("get booking details", async () => {
        const bookingDetailsResponse = await getBookingDetails(createBookingResponse.data.id);

        expect(bookingDetailsResponse.data.id).toMatch(createBookingResponse.data.id);
        expect(bookingDetailsResponse.data.dateFrom).toMatch(createBookingResponse.data.dateFrom);
        expect(bookingDetailsResponse.data.dateTo).toMatch(createBookingResponse.data.dateTo);
        expect(bookingDetailsResponse.data.guests).toBe(createBookingResponse.data.guests);
        expect(bookingDetailsResponse.data.venue.id).toMatch(createVenueResponse.data.id);
    });

    it("get user bookings", async () => {
        const userBookingsResponse = await getUserBookings();

        expect(userBookingsResponse.data.length).toBeGreaterThan(0);
        expect(userBookingsResponse.data[0].id).not.toBeNull();
    });

    afterAll(async () => {
        console.log("Venue id to be deleted: ", createVenueResponse.data.id);
        try {
            await deleteVenue(createVenueResponse.data.id);
        } catch (error) {
            expect(error).toBeNull();
        }

        //Verify that booking does not exists anymore
        try {
            await getBookingDetails(createBookingResponse.data.id);
        } catch (error) {
            expect(error).not.toBeNull();
        }
    });

});