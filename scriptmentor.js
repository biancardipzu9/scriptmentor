// Create a class named ScriptMentor
class ScriptMentor {
    constructor(name) {
        this.name = name;
    }

    // Method: assist with scripting
    assist() {
        console.log(`${this.name} is providing scripting assistance...`);
        // Write your scripting assistance code here
    }

    // Method: review script
    review() {
        console.log(`${this.name} is reviewing the script...`);
        // Write your script review code here
    }

    // Method: optimize script
    optimize() {
        console.log(`${this.name} is optimizing the script...`);
        // Write your script optimization code here
    }
}

// Create an instance of ScriptMentor named myScriptMentor
const myScriptMentor = new ScriptMentor("myScriptMentor");

// Assist with scripting
myScriptMentor.assist();

// Review the script
myScriptMentor.review();

// Optimize the script
myScriptMentor.optimize();

