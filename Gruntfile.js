module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'public/js/*.js']
    },
    
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/js",
      //    name: "almond.js",
          include: [ 'hls-controller.js'],
          out: "dist/js/hls-controller.js",
          optimize: "uglify2",
        },
      },
    },
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register the default tasks.
  grunt.registerTask('default', ['requirejs']);
};