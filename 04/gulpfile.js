const gulp = require("gulp");
const purgeCss = require("gulp-purgecss");

gulp.task("purge-css", () => {
  return gulp
    .src("./dist/assets/*.css")
    .pipe(
      purgeCss({
        content: [
          "app/**/**/**/*.html",
          "app/**/**/**/*.js",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:()]+(?<!:)/g) || [],
        whitelistPatterns: [/-webkit-scrollbar-thumb$/],
        keyframes: false,
      })
    )
    .pipe(gulp.dest("./dist/assets/"));
});

gulp.task("service-worker", () => {
  return gulp
    .src("./sw.js")
    .pipe(gulp.dest("./dist/"));
});

gulp.task("app-manifest-favicon", () => {
  return gulp
    .src("./favicon/*")
    .pipe(gulp.dest("./dist/assets/images/favicon"));
});

gulp.task("app-favicon", () => {
  return gulp
    .src("./favicon/favicon.ico")
    .pipe(gulp.dest("./dist/"));
});

gulp.task("app-manifest", () => {
  return gulp
    .src("./manifest.json")
    .pipe(gulp.dest("./dist/"));
});
