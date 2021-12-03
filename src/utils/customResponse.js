const customResponse = (code,message,dataName,data) => {
    return {
        code,
        message,
        [dataName]:data
    }
}

module.exports = {
    customResponse
}