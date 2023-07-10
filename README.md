# StringAnalyzer

The `StringAnalyzer` class provides methods for analyzing and converting strings, determining their type (binary or hexadecimal), and performing conversions to various formats.

## Methods

### `isBinary(string)`

The `isBinary` method takes a string and determines if it is a binary number.

**Parameters:**

- `string` (type: string): The string to analyze.

**Return Value:**

An object with information about the string:

- `isBinary` (type: boolean): A flag indicating if the string is a binary number.
- `decimal` (type: number | null): The decimal representation of the string (if it is a binary number).
- `hexadecimal` (type: string | null): The hexadecimal representation of the string (if it is a binary number).

### `isHexadecimal(string)`

The `isHexadecimal` method takes a string and determines if it is a hexadecimal number.

**Parameters:**

- `string` (type: string): The string to analyze.

**Return Value:**

An object with information about the string:

- `isHexadecimal` (type: boolean): A flag indicating if the string is a hexadecimal number.
- `decimal` (type: number | null): The decimal representation of the string (if it is a hexadecimal number).
- `binary` (type: string | null): The binary representation of the string (if it is a hexadecimal number).

## Usage Example

```javascript
const StringAnalyzer = require('./stringAnalyzer');

const binaryString = "101010";
const hexadecimalString = "2a";

const binaryResult = StringAnalyzer.isBinary(binaryString);
console.log(JSON.stringify(binaryResult, null, 2));

const hexadecimalResult = StringAnalyzer.isHexadecimal(hexadecimalString);
console.log(JSON.stringify(hexadecimalResult, null, 2));
