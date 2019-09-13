## Initial Developer Setup
- install node
- install npm
- install VSCode
- connect to [Nexus](https://mineraltree.atlassian.net/wiki/spaces/MINUI/pages/890044424/Connecting+to+Nexus)
- in terminal/command-line, navigate to project root (where packages.json lives) and run
    `npm install`
- you can then run any of the commands described below

## Available Scripts

In the project directory, you can run:

### `npm start`

Run `npm run build` in watch mode

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Note that tests will run in node.js server environment, NOT a web browser.  Most global window properties and services are reasonably approximated.<br>

#### Debugging Your Unit Tests
`NOTE:  Requires more research to see if there's a better way...`
In VSCode, click debug (bug) icon (along left vertical app menu).  Select "Debug Unit Tests".  <br>
This will run Jest in the terminal window.  Most Jest commands in the terminal window seem to ignore breakpoints.  But the 'p' command will hit breakpoints if you enter a test filename (or you can first CUT it from the test list, and PASTE it into the p command).  <br>
This will let you run just one test, and if you have any breakpoints in that test or any code it calls, they will be hit.

### `npm test -- --coverage`

Launches the test runner in code-coverage mode. This will run all tests and generate code and branch coverage reporting. By default this will run in watcher mode. To not have it run in watcher mode, add --watchAll=false to the end of the command.
`NOTE:  Watch could interfere with local build command`

### `npm run build`

Generates bundles and typings to the `dist` folder.<br>

### `npm run lint`

This will run the linter on all ts/tsx files in the /src folder.

**Note: the configuration file for the linter is `tslint.json` located in the root directory.**

### `npm run lint-fix`

This will run the linter on all ts/tsx files in the /src folder as well as attempt to fix the conflicts in the files.

### `debuggers`
[React Devtools](React%20Developer%20Tools%20-%20Google%20Chrome%20https://chrome.google.com/.../react-developer-tools/fmkadmapgofadopljbjfkapdkoieni...) 
You will get a new tab called React in your Chrome DevTools. This shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering.

By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on.

If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.

[Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
The extension provides power-ups for your Redux development workflow. Apart from Redux, it can be used with any other architectures which handle the state.  It allows for hot reload and time-travel.
