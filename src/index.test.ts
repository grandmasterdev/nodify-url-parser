import * as cut from "./index";

describe("tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the right object as output", () => {
    const mockUrl = "https://mytestdomain.com/sample/read?book=1";

    expect(cut.parseUrl(mockUrl)).toEqual({
      host: "mytestdomain.com",
      path: "/sample/read",
      protocol: "https:",
      query: {
        book: "1"
      }
    });
  });
});
