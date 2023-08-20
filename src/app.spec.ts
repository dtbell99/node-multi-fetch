import { any } from "./app";
import { RequestItem, HTTP_METHOD, ResponseType, ResponseItem } from "./model";

describe("app", () => {
    describe("any", () => {
        it("should return empty array when empty array is passed", () => {
            const request: RequestItem = {
                url: "www.testurl.com",
                method: HTTP_METHOD.GET,
                responseType: ResponseType.TEXT
            }
            const requests: RequestItem[] = [
                request
            ]

            const responseItems: ResponseItem[] = any(requests);
            expect(responseItems.length).toBe(0);
        });
    });
});