const path = require("path");

module.exports = {
    entry:"./js/controller.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname,"dist")
    }
}