const StringAnalyzer = require("./stringanalyzer");

const binaryString = "101010";
const hexadecimalString = "2a";

const binaryResult = StringAnalyzer.isBinary(binaryString);
console.log(JSON.stringify(binaryResult, null, 2)); // output: {"isBinary": true,"decimal": 42,"hexadecimal": "2a"}

const hexadecimalResult = StringAnalyzer.isHexadecimal(hexadecimalString);
console.log(JSON.stringify(hexadecimalResult, null, 2)); // output: { "isHexadecimal": true, "decimal": 42, "binary": "101010" }
