module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./css"],
                    yuicompress: true
                },
                files: {
                    "./css/home.css": "./css/home.less"
                }
            }
        },
        watch: {
            files: "./css/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};