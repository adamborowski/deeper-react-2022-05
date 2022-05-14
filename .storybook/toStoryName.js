const path = require('path');
const pkgUp = require('pkg-up');

module.exports = (state) => {
  // find the closest package.json
  const packageJsonPath = pkgUp.sync({ cwd: state.filename });

  // read the package.json
  const packageJson = require(packageJsonPath);

  // get the path of the story file relative to the package root
  const { dir: packageJsonDir } = path.parse(packageJsonPath);
  const { dir: fileDir, name: fileName } = path.parse(
    path.relative(packageJsonDir, state.filename)
  );

  const storybookPath = [
    // package name; "/" has meaning to storybook, hence replace a possible "/" by "|"
    packageJson.name.replace('/', '|'),

    // file dir
    ...fileDir.split(path.sep),
  ];

  // handle file names
  if (fileName === 'examples' || fileName === 'stories') {
    // nothing to do
  } else if (fileName.endsWith('.stories')) {
    storybookPath.push(fileName.slice(0, '.stories'.length + 1));
  } else if (fileName.endsWith('.examples')) {
    storybookPath.push(fileName.slice(0, '.examples'.length + 1));
  }

  return storybookPath.join('/');
};
