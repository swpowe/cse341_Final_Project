const {
    getAllLists, // Spencer
    getOneList, // Spencer
    createList, // Spencer
    updateList, // Joaquin
    deleteList, // Joaquin
    getAllItems, // Joaquin
    getItem, // Joaquin
    getItemsByLabel, // Ammon
    updateItem, // Ammon
    deleteItem, // Ammon
    addLabelToItem, // Ammon
    getLabels, // Ammon
} = require("../controllers/todo.controller");

let req, res, send;

beforeEach(() => {
    req = {},
        send = jest.fn();
    res = {
        status: jest.fn(() => ({
            send,
        })),
        json: jest.fn(),
    };
});

describe('createList()', () => {
    // describe('when a user is not signed in', () => {});
    describe('when a user is signed in', () => {
        // beforeEach(() => {
        //     // req. //!! set req and response object 
        // });

        describe('and the data is valid', () => {
            beforeEach(() => {
                req.body = {
                    //!! body props
                    list: {
                        listName: 'Test List'
                    }
                };
            });

            it('responds with 201', async () => {
                await createList(req, res);

                expect(res.status).toHaveBeenCalledWith(201);
            });
        });
        // it('', () => {});
    });
});
