const generateUniqueId = require("../../src/Util/generateUniqueID");

describe("Generate unique ID", () => {
    it("Should generate an unique ID", () => {
        expect(generateUniqueId()).toHaveLength(8);
    })
})