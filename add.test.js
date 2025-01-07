const add = require('./add');

test("Empty string should return 0", ()=>{
    expect(add("")).toBe(0);
})