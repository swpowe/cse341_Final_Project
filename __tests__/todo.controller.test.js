const {
  getAllLists,
  getOneList,
  createList,
  updateList,
  deleteList,
  getAllItems,
  getItem,
  getItemsByLabel,
  updateItem,
  deleteItem,
  addLabelToItem,
  getLabels,
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