const usersRouter = require("../users");
const routesFor = require("../testHelperFunction/routesFor");


const routes = routesFor(usersRouter);

describe("routes", () => {
    describe("/", () => {
        it("supports http GET", () => {
            expect(routes["/all-users"]).toContain("get");
        });

        it("supports http POST", () => {
            expect(routes["/user"]).toContain("post");
        });
    });

    describe("/:id", () => {
        it("supports http GET", () => {
            expect(routes["/user/:id"]).toContain("get");
        });

        it("supports http PUT", () => {
            expect(routes["/user/:id"]).toContain("put");
        });
        it("supports http DELETE", () => {
            expect(routes["/user/:id"]).toContain("delete");
        });

    })
})