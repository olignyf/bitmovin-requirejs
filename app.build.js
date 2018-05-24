/* app.build.js */
/* r.js optimizer config */
/* Note: must be run under "baseUrl" directory like this :
     $> cd public/js
     $> node ../../lib/r.js -o ../app.build.js
 */

/* all path below are relative to where this file (app.build.js) resides  */
({
    appDir: "prep", /* main html directory relative to this app.build.js file */
    baseUrl: "js", /* relative to "appDir"; is also the directory from which r.js should be executed */
    dir: "./dist/", /* output dir */
    optimize:"uglify2",
    uglify2: {
     output: {
         beautify: true
     },
     unused: false,  
     compress: {
         sequences: false
     },
     warnings: true,
     mangle: false
    },
    modules: [
        {
            name: "main" /* requirejs starting point */
        }
    ]
})

