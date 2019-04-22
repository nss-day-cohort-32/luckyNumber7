module.exports = {
    scripts: {
        files: [
            "../scripts/**/*.js",
           
        ],
        tasks: ["eslint"],
        options: {
            spawn: false,
            debounceDelay: 1000
        }
    }
}