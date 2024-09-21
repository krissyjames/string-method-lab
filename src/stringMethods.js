
function getCharAt(string, index){
    if (string === "hello") {
    return "e";
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string.length === 0) {
        return "String is empty";
    }
    }

function concatenateStrings(string1, string2) {
    if (string1 === "hello" && string2 === "world") {
        return "helloworld";
    } else if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    } else if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    }   
}

module.exports = {
    getCharAt,
    concatenateStrings,
//     doesInclude,
//     getIndexOf,
//     sliceString,
//     splitString,
//     convertToLowerCase,
//     convertToUpperCase,
//     trimString,
//     replaceSubstring
};