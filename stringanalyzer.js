class StringAnalyzer {
  static isBinary(string) {
    const isString = typeof string === "string";
    const isBinary = isString && /^[01]+$/.test(string);
    const decimal = isBinary ? parseInt(string, 2) : null;
    const hexadecimal = isBinary ? decimal.toString(16) : null;

    return {
      isBinary,
      decimal,
      hexadecimal,
    };
  }

  static isHexadecimal(string) {
    const isString = typeof string === "string";
    const isHexadecimal = isString && /^[0-9A-Fa-f]+$/.test(string);
    const decimal = isHexadecimal ? parseInt(string, 16) : null;
    const binary = isHexadecimal ? decimal.toString(2) : null;

    return {
      isHexadecimal,
      decimal,
      binary,
    };
  }
}

module.exports = StringAnalyzer;
