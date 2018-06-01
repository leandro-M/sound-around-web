const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

let sassPath = {
  input: './_assets/sass/*.scss',
  output: './src/',
  watch: './_assets/sass/**/*.scss'
};


gulp.task('sass', () => {
  return gulp.src(sassPath.input)

  .pipe(sass())

  .on('error', function(err){
		console.log(err)
  })
  
  .pipe(autoprefixer({ browsers: ['> 0%'] }))

  .pipe(gulp.dest(sassPath.output));
});


gulp.task('watch', () => {
  gulp.watch(sassPath.watch, ['sass']);
});


gulp.task('default', ['watch']);
