'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      cssDir: 'css',
      sassDir: 'sass',
    },

    sass: {
      dev: {
        options: {
          style: 'compact',
          sourcemap: 'none',
          lineNumbers: false,
          compass: false
        },
        files: [{
          expand: true,
          cwd: '<%= project.sassDir %>', // All src matches are relative to (but don't include) this path
          src: ['*.scss'], // Pattern(s) to match, relative to the cwd
          dest: '<%= project.cssDir %>', // Destination path prefix
          ext: '.css' // Replace any existing extension with this value in generated dest paths
        }]
      }
    },

    autoprefixer: {
        options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        no_dest_multiple: {
            src: '<%= project.cssDir %>/*.css',
        },
    },

    hologram: {
      generate: {
        options: {
          config: 'styleguide_config.yml'
        }
      }
    },
    
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: '<%= project.sassDir %>/*.scss',
        tasks: ['sass', 'autoprefixer', 'hologram']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hologram');
  
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('watchme', ['build', 'watch']);
}
