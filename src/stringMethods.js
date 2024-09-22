
function getCharAt(string, index){
    if ((typeof string === "string") && (string !== "")) {
    return string.charAt(index);
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string === "") {
        return "String is empty";
    }
    }

function concatenateStrings(string1, string2) {
    if ((typeof string1 === "string") && (typeof string2 === "string")) {
        return string1.concat(string2);
    } else if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    } else if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    }   
}

function doesInclude(string1, string2) {
    if ((typeof string1 === 'string') && (string1 !== "") && (typeof string2 === 'string') && (string2 !== "")) {
        return string1.includes(string2);
    } else if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    } else if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    } else if ((string1 === "") || (string2 === "")) {
        return "String is empty";
    }
}

function getIndexOf(string, char) {
    if ((typeof string === "string") && (string !== "") && (typeof char === "string") && (char !== "")) {
        return (string.indexOf(char));
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (typeof char !== 'string') {
        return `Value given to function was of Data Type: ${typeof char}`;
    } else if ((string === "") || (char === "")) {
        return "String is empty";
    }
}

function sliceString(string, index1, index2) {
    if ((typeof string === 'string') && (string !== "")) {
        return string.slice(index1, index2);
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string == "") {
        return "String is empty";
    }
}

function splitString(string, sep) {
    if ((typeof string === 'string') && (string !== "")) {
        return string.split(sep);
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string == "") {
        return "String is empty";
    }
}

function convertToLowerCase(string) {
    if ((typeof string === 'string') && (string !== "")) {
        return string.toLowerCase();
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string == "") {
        return "String is empty";
    }
}

function convertToUpperCase(string) {
    if ((typeof string === 'string') && (string !== "")) {
        return string.toUpperCase();
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (string == "") {
        return "String is empty";
    }
}

function trimString(string) {
    if ((typeof string == 'string') && (string !== "")) {
        return string.trim();
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    }
}

function replaceSubstring(text, string, newString) {
    if ((typeof text == 'string') && (text !== "") && (typeof string == 'string') && (string !== "") && (typeof newString == 'string') && (newString !== "")) {
        return (text.replace(string, newString));
    } else if (typeof string !== 'string') {
        return `Value given to function was of Data Type: ${typeof string}`;
    } else if (typeof newString !== 'string') {
        return `Value given to function was of Data Type: ${typeof newString}`;
    } else if ((text === "") || (string === "") || (newString === "")) {
        return "String is empty";
    }
}

module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};