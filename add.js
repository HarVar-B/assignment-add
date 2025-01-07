function add(numbers){
    if(numbers === "") return 0;
    return 0 + numbers.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
}

module.exports = add;