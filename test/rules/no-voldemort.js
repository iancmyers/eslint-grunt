/**
 * @fileoverview Rule to flag use of "voldemort" as an identifier.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "Identifier": function(node) {
            if (node.name.toLowerCase() === "voldemort") {
                context.report(node, "He who shall not be named must remain unnamed.");
            }
        }
    };

};
