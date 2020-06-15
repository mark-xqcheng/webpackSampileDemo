function WatcherPlugin(options) {
  this.options = options || {};
}
WatcherPlugin.prototype.apply = function (compiler) {
  compiler.hooks.watchRun.tapAsync("watchPlugin", (compiler, cb) => {
    console.log("时刻监听状态");
    // let mtimes = compiler.watchFileSystem.watcher.mtimes;
    // let mtimesKeys = Object.keys(mtimes);
    // if (mtimesKeys.length > 0) {
    //   console.log(`本次一共改动了${mtimesKeys.length}个文件，目录为：`);
    //   console.log(mtimesKeys);
    //   console.log("-----------分割线----------");
    // }
    // console.log(compiler);
    const fileWatchers = compiler.watchFileSystem.watcher.fileWatchers;
    console.log(fileWatchers);
    let paths = fileWatchers
      .map((watcher) => watcher.path)
      .filter((path) => !/node_modules/.test(path));
    if (paths.length > 0) {
      console.log(`本次一共改动了${mtimesKeys.length}个文件，目录为：`);
      console.log(mtimesKeys);
      console.log("-----------分割线----------");
    }

    cb();
  });
  compiler.hooks.watchClose.tap("watchPlugin", () => {
    console.log("说停就停！");
  });
};
module.exports = WatcherPlugin;
