function check(resourceValue, value,element) {
    console.log('resourceValue',resourceValue);
    console.log('value',value);
    console.log('element',element);
    console.log("bool",((resourceValue & value) === value));
    if((resourceValue & value) === value){
       return element;
    }
    return null;
}

module.exports = {
    check: check
};
