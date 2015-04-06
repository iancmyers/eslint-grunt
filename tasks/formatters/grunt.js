require("colors");

function getMessageType(message) {

    if (message.fatal) {
        return "Error";
    } else {
        return "Warning";
    }

}

module.exports = function(results) {

    var output = "",
        total = 0;

    results.forEach(function(result) {

        var messages = result.messages;
        total += messages.length;

        messages.forEach(function(message) {

            output += ">> ".red + result.filePath + ": ";
            output += "line " + (message.line || 0) + ", col " +
                (message.column || 0) + ", " + getMessageType(message);
            output += " - " + message.message + "\n";
        });

    });

    output += "\n" + (total === 0 ? ">> ".green : ">> ".red) + total + " problem" + (total !== 1 ? "s" : "");

    return output;
};
