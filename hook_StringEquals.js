

// Hooking Java's String.equals method
Java.perform(function() {
    var StringClass = Java.use("java.lang.String");

    // Hook the 'equals' method
    StringClass.equals.implementation = function(other) {
        // Get the original result of the method
        var result = this.equals(other);

        // Print the original string and the comparison string
        console.log("[*] String.equals called");
        console.log("    this: " + this);
        console.log("    other: " + other);
        console.log("    result: " + result);

        // Return the original result
        return result;
    };
});
