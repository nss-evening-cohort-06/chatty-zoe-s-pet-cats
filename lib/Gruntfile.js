  grunt.initConfig({ 
    jshint: { 
      options: { 
        predef: [ "document", "console" ], 
        esnext: true, 
        globalstrict: true, 
        globals: {} 
      }, 
      files: ['../javascripts/**/*.js'] 
    }, 
    watch: { 
      options: { 
        livereload: true, 
      }, 
      javascripts: { 
        files: ['../javascripts/**/*.js'], 
        tasks: ['jshint'] 
      } 
    } 
  }); 
 
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); 
 
  grunt.registerTask('default', ['jshint', 'watch']); 
}; 