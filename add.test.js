const add = require('./add');

test("Empty string should return 0", ()=>{
    expect(add("")).toBe(0);
});

test("Single number should return number", ()=>{
    expect(add("1")).toBe(1);
});

test("Two numbers should return sum", ()=>{
    expect(add("1,2")).toBe(3);
});

test("Multiple numbers should return sum", ()=>{    
    expect(add("1,2,3,4,5")).toBe(15);
});

test("New lines should be treated as delimiters", ()=>{
    expect(add("1\n2,3")).toBe(6);
});

test("Custom delimiters should be supported", ()=>{
    expect(add("//;\n1;2;3")).toBe(6);
});

test("Calling add with a negative number should throw an exception", ()=>{
    expect(()=>add("-1")).toThrow("negative numbers not allowed -1");
});

test("If there are multiple negative numbers, show all of them in the exception message, separated by commas", ()=>{
    expect(()=>add("-1,3,4,-2,5,6")).toThrow("negative numbers not allowed -1,-2");
});

test("input including custom delimitter and negative values should throw an exception", ()=>{
    expect(add("//;\n1;2;3;-9;90;-34;5;6")).toThrow("negative numbers not allowed -9,-34");
});