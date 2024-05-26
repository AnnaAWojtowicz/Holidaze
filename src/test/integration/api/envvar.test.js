describe("local envar test", () => {
    it("following local envars should exist", () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const testEmail = process.env.EMAIL_TEST;
        const testPassword = process.env.PASSWORD_TEST;

        expect(apiKey).not.toBeUndefined();
        expect(testEmail).not.toBeUndefined();
        expect(testPassword).not.toBeUndefined();
        expect(apiKey).not.toBeNull();
        expect(testEmail).not.toBeNull();
        expect(testPassword).not.toBeNull();
    })
});