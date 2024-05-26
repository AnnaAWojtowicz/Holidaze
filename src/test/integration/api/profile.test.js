import { testEmail, testName, testPassword } from "../../../setupTests";
import { login } from "../../../api/login";
import { getProfile } from "../../../api/getProfile";
import { updateUserProfile } from "../../../api/updateUserProfile";

describe("profile", () => {

    beforeAll(async () => {
        await login(testEmail, testPassword);
    });

    it("get test user profile", async () => {
        const userProfileResult = await getProfile(testName);

        expect(userProfileResult.data.name).toMatch(testName);
        expect(userProfileResult.data.email).toMatch(testEmail);
    });

    it("update test user profile", async () => {
        const userProfileResult = await getProfile(testName);
        const updateUserResponse =
            await updateUserProfile(userProfileResult.data.avatar.url, userProfileResult.data.bio, userProfileResult.data.banner.url);

        expect(updateUserResponse.data.name).toMatch(userProfileResult.data.name);
        expect(updateUserResponse.data.email).toMatch(userProfileResult.data.email);
        expect(updateUserResponse.data.avatar.url).toMatch(userProfileResult.data.avatar.url);
        expect(updateUserResponse.data.banner.url).toMatch(userProfileResult.data.banner.url);
    });
});