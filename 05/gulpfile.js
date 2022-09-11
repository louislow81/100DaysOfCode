const gulp = require("gulp");
const stringReplace = require('gulp-replace')
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
        whitelistPatterns: [/-webkit-scrollbar-thumb$/], // enabled
        keyframes: false, // enabled
      })
    )
    .pipe(gulp.dest("./dist/assets/"));
});

let version = (Math.random() + 1).toString(36).substring(7);
gulp.task("app-cache-version", () => {
  return gulp.src('./dist/sw.js')
    .pipe(stringReplace('knott-app-cache-dev-version', 'knott-app-' + version))
    .pipe(gulp.dest('./dist/'))    
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

gulp.task("post-build", gulp.series(
  "purge-css",
  "service-worker",
  "app-manifest-favicon",
  "app-favicon",
  "app-manifest",
  "app-cache-version"
))
