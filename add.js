function add(numbers){
    if(numbers === "") return 0;
    let delimiter = "\n";
    if(numbers.startsWith("//")){
        delimiter = numbers[2];
        numbers = numbers.substring(4);
    }
    if(numbers.includes(delimiter)) numbers = numbers.replace(delimiter, ",");

    if(numbers.includes("-")){
        let negatives = numbers.split(",").filter(num => num.includes("-"));
        throw `negative numbers not allowed ${negatives.join(",")}`;
    }

    return 0 + numbers.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
}

module.exports = add;