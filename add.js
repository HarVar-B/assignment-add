function add(numbers){
    if(numbers === "") return 0;
    if(numbers.includes("\n")) numbers = numbers.replace("\n", ",");
    return 0 + numbers.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
}

module.exports = add;