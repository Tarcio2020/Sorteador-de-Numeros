module .exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            //máquina
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            //browser
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less/'],
                tasks: ['less:development']
            }
        },

    })




    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less');

    // [] = Array...pode conter várias tarefas
    //                             não pode ter espaço
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production']);

}