// // 创建一个构造函数
// function No1WebpackPlugin(options) {
//   this.options = options;
// }
// // 重写构造函数原型对象上的apply方法
// No1WebpackPlugin.prototype.apply = function (compiler) {
//   compiler.plugin("done", () => {
//     console.log(this.options.msg);
//   });
// };
// module.exports = No1WebpackPlugin;

// class No1WebpackPlugin {
//   constructor(options) {
//     this.options = options;
//   }
//   apply(compiler) {
//     compiler.plugin("done", () => {
//       console.log(this.options.msg);
//     });
//   }
// }

function No1WebpackPlugin(options) {
  this.options = options;
}
No1WebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.done.tap("NO1", () => {
    console.log(this.options.msg);
  });
};
module.exports = No1WebpackPlugin;
