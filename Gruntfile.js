module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
		clean: ["dist"],

        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['vendor/**'],
                        dest: 'dist'
                    },
					
					{
                        expand: true,
                        src: ['js/**'],
                        dest: 'dist'
                    },

                    // includes files within path and its sub-directories
                    {
                        expand: true,
                        src: ['css/**'],
                        dest: 'dist'
                    }
                ],
            },
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['*.html'],
                dest: 'dist/output.html',
            },
        },
    });
	
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
	
	// Default task(s).
	grunt.registerTask('default', ['clean', 'copy', 'concat']);


}