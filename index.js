const driver = {}; 

function updateDriverWithKeyAndValue(driver, key, value){
    // does not mutate driver and return a new driver with an updated value and key
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    // mutate the driver
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    // delete the key/value pair but not mutate the driver
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]; 
    return driver;
}