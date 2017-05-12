## Steps

### Install RN CLI
```
$ npm i -g react-native-cli
```

### Create a demo project
```
$ react-native init SweetApp && cd SweetApp
```

### Install eslint
```
$ npm i eslint --save-dev
$ ./node_modules/.bin/eslint --init

# as the following configuration

? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb
? Do you use React? Yes
? What format do you want your config file to be in? JSON
```

### Install vscode eslint extension
Launch VS Code Quick Open (⌘+P), paste the following command, and press enter.
```
ext install vscode-eslint
```

### Install Airbnb’s linter rules
```
export PKG=eslint-config-airbnb
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm i --save-dev "$PKG@latest"
```

### Install babel-eslint
```
$ npm i babel-eslint --save-dev

# Insert the following line:
`"parser": "babel-eslint",`
# into `module.exports = {
  ...
}`
```

### Install Prettier
```
$ yarn add prettier --dev
```

### Install extension prettier eslint
Launch VS Code Quick Open (⌘+P), paste the following command, and press enter.
```
ext install prettier-eslint-vscode
```

### Config VS code to format on save
Press `CMD + ,` on Mac to open your VS Code User Settings and enable format on save.
```
"editor.formatOnSave": true
```

### Flow setup
From your terminal install Flow using Homebrew.
```
$ brew install flow
```

Check the file `.flowconfig` to get the flow version from the last line, here is:
```
[version]
^0.42.0
```
So install the version 0.42.0 for flow-bin
```
$ npm i flow-bin@0.42.0 babel-preset-flow --save-dev
```

Open the .babelrc file and add Flow as a preset then add the config “retainLines”: true
as
```
{
  "presets": [
    "react-native",
    "flow"
  ],
  "retainLines": true
}
```

Open the Workspace settings.json file and add this:
```
// Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will immediately run code contained within it.
"flow.useNPMPackagedFlow": true,
// Enable/disable JavaScript validation. (For Flow)
"javascript.validate.enable": false,
// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false
```
NOTE: Disabling the default JavaScript formatter allows Prettier to handle our code formatting.

Open the package.json file and add the following scripts:
```
// start the flow server
"flow_start": "flow start",
// stop the flow server
"flow_stop": "flow stop",
// check the flow status
"flow_status": "flow status",
// check the flow coverage percentage
"flow_coverage": "flow coverage"
```
as:
```
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "flow_start": "flow start",
    "flow_stop": "flow stop",
    "flow_status": "flow status",
    "flow_coverage": "flow coverage"
  },
```

Run the command to check setup is ready:
```
$ npm run flow start
```
It should be something like this:
```
Spawned flow server (pid=8842)
```

### Install flow extension on status bar
Launch VS Code Quick Open (⌘+P), paste the following command, and press enter.

```
ext install flow-for-vscode
```

### Install `code` command to launch vscode
Launch Visual Studio Code -> `CMD + SHIFT + P` -> install 'code' command in PATH


## Reference:
https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213