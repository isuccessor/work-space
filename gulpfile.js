const { src, dest, watch, series } = require('gulp');
const browsersync = require('browser-sync').create();


function greatingTask(cb){
	console.log('Слава Нації!');
	cb();
} 

function browsersyncServe(cb){
	browsersync.init({
		server: {
			baseDir: './app'
		}
	});
	cb();
}

function browsersyncReload(cb){
	browsersync.reload();
	cb();
}

function watchTask(){
	watch(['app/*.html','app/*.css','app/*.js'], browsersyncReload);
}

exports.default = series(
	greatingTask,
	browsersyncServe,
	watchTask
);