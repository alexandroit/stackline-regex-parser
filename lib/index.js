/**
 * RegexParser
 * Parses a string input.
 *
 * @name RegexParser
 * @function
 * @param {String} input The string input that should be parsed as regular
 * expression.
 * @return {RegExp} The parsed regular expression.
 */
var RegexParser = (module.exports = function (input) {
    // Validate input
    if (typeof input !== "string") {
        throw new Error("Invalid input. Input must be a string");
    }

    // Match the historical first non-empty line without regex backtracking.
    var start = input.search(/[^\r\n\u2028\u2029]/);
    if (start === -1) {
        throw new Error("Invalid regular expression format.");
    }
    var line = input.slice(start).split(/[\r\n\u2028\u2029]/, 1)[0];
    var close = line.charAt(0) === "/" ? line.lastIndexOf("/") : -1;
    var pattern = close > 1 ? line.slice(1, close) : line;
    var flags = close > 1 ? (/^[a-z]*/i.exec(line.slice(close + 1))[0]) : "";

    // Filter valid flags: 'g', 'i', 'm', 's', 'u', and 'y'
    var validFlags = Array.from(new Set(flags))
        .filter(function (flag) { return "gimsuy".includes(flag); })
        .join("");

    // Create the regular expression
    return new RegExp(pattern, validFlags);
});
