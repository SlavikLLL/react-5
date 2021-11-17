const {dest,src,parallel} = require("gulp");
 const copy = () =>{
     return src('dist/scss/*.scss')
     .pipe(dest("build/styles"));
 };
 const img = () =>{
     return src('dist/img/*.png')
     .pipe(dest('build/styles'));
 };


 const example = () =>{
    return console.log("123");
 };
 exports.default = parallel(copy,img);

 exports.test = example;