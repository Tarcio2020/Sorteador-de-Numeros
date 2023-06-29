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

    })






    grunt.loadNpmTasks('grunt-contrib-less');

    // [] = Array...pode conter várias tarefas
    //                             não pode ter espaço
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);

}