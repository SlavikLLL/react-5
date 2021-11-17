const {dest,src,parallel, series} = require("gulp");
 const copy = () =>{
     return src('dist/scss/*.scss')
     .pipe(dest("build/styles"));
 };
 const img = () =>{
     return src('dist/img/*.png')
     .pipe(dest('build/styles'));
 };
 const optimize = () =>{
     console.log("Фото оптимизированы");
 }


 const example = () =>{
    return console.log("123");
 };
 exports.default = parallel(copy,img,optimize);
exports.styles = copy;
exports.img = series(img,optimize);
 exports.test = example;