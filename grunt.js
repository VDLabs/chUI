/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! chUI - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://vdlabs.com/\n' +
        '* Copyright VDLabs(c) <%= grunt.template.today("yyyy") %> ' +
        'VDLabs; Licensed XXX */'
    },
    lint: {
      files: ['grunt.js', 'chUI/**/*.js', 'test/**/*.js']
    },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'chUI/Dom/Dom.js', 'chUI/Data/Data.js'],
        dest: 'dist/chUI-all.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/chUI-all.min.js'
      }
    },
    // watch: {
    //   files: '<config:lint.files>',
    //   tasks: 'lint qunit'
    // },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        chUI: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');

};
