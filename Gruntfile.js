module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        sourceMap: true,
        sourceMapIncludeSources: true,
        sourceMapIn: 'build/<%= pkg.name %>.js.map',
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    coffee: {
      compile: {
        options: {
          sourceMap: true
        },
        files: {
          'build/<%= pkg.name %>.js': 'src/index.coffee'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['coffee:compile', 'uglify']);
  grunt.registerTask('travis', ['coffee:compile']);

};