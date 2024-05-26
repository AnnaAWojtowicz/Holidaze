// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Test user details from .env
const testEmail = process.env.EMAIL_TEST;
const testPassword = process.env.PASSWORD_TEST;
const testName = testEmail.split('@')[0];
const venueToCreate = {
    "name": "Random test venue",
    "description": "Just a test",
    "price": 10,
    "maxGuests": 30,
    "media": [
        {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Slaty-crowned_antpitta_%28Grallaricula_nana_occidentalis%29_Caldas.jpg/640px-Slaty-crowned_antpitta_%28Grallaricula_nana_occidentalis%29_Caldas.jpg",
            "alt": ""
        },
        {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/The_grandmother_at_her_spinning_wheel.jpg/640px-The_grandmother_at_her_spinning_wheel.jpg",
            "alt": ""
        }
    ],
    "rating": 5,
    "meta": {
        "wifi": true,
        "parking": true,
        "breakfast": true,
        "pets": true
    },
    "location": {
        "address": "Test adress",
        "city": "Paris1780",
        "zip": "0001",
        "country": "France",
        "continent": "Europe",
        "lat": 48.85822,
        "lng": 2.2945
    }
}

// Mock localStorage - simple
// global.localStorage = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
// };

// Mock localStorage - with read and write capabilities
const localStorageMock = (function () {
    let store = {};

    return {
        getItem: function (key) {
            return store[key] || null;
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        clear: function () {
            store = {};
        }
    };

})();

global.localStorage = localStorageMock;

//Making constants available for import in tests
export { testEmail, testPassword, testName, venueToCreate };