const gulp = require("gulp");
const purgeCss = require("gulp-purgecss");

gulp.task("purge-css", () => {
  return gulp
    .src("./dist/assets/*.css")
    .pipe(
      purgeCss({
        content: [
          "views/**/**/**/*.html",
          "views/**/**/**/*.js",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:()]+(?<!:)/g) || [],
        whitelistPatterns: [/-webkit-scrollbar-thumb$/],
        keyframes: true,
      })
    )
    .pipe(gulp.dest('./dist/assets/'));
});


gulp.task("purge-css",
  gulp.series("purge-css")
);

