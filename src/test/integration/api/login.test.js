import { testEmail, testName, testPassword } from "../../../setupTests";
import { login } from "../../../api/login";

describe("login", () => {

    it("login user", async () => {
        const result = await login(testEmail, testPassword);

        expect(result.data.name).toMatch(testName);
        expect(result.data.email).toMatch(testEmail);
        expect(result.data.accessToken).not.toBeNull();
        expect(result.data.accessToken).not.toBeUndefined();
        expect(result.data.accessToken.substring(0, 2)).toMatch("ey");
    });

});