function add(numbers){
    if(numbers === "") return 0;
    let delimiter = "\n";
    if(numbers.startsWith("//")){
        delimiter = numbers[2];
        numbers = numbers.substring(4);
    }
    if(numbers.includes(delimiter)) numbers = numbers.replace(delimiter, ",");
    return 0 + numbers.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
}

module.exports = add;