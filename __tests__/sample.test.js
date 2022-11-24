const db = require('../config/db');

describe('Sample Test', () => {
    test('Not sure what if anything...', async() => {
        // actual test
        const result = await db();
        expect(result).toBe(0);
    })
    test('time out test', () => {
        const result = db();
        setTimeout((result) => {expect(result).toBe(0)}, 3000);
    })
})