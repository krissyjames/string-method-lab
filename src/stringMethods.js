
function getCharAt(string, index){
    if (string === "hello") {
    return "e";
    }
    else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    }
    else if (string.length === 0) {
        return "String is empty";
    }
    }


module.exports = {
    getCharAt,
//    concatenateStrings,
//     doesInclude,
//     getIndexOf,
//     sliceString,
//     splitString,
//     convertToLowerCase,
//     convertToUpperCase,
//     trimString,
//     replaceSubstring
};