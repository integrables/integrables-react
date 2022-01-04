## Setup your redux with Redux Toolkit


# Creating a reducer

use the provided [code snippet](https://github.com/integrables/integrables-react/blob/master/redux/snippets/create-reducer-vscode-snippet.txt) to create a new reducer using redux-toolkit, just add the vs code snippet in the snippets folder to your vs code user snippets and you can use the shortcut "rcr" (redux create reducer) in a new file to generate the redux reducer. [learn more](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

#  Add your reducer to the root reducers

after creating the reducer add the reducer to the [root reducer](https://github.com/integrables/integrables-react/blob/master/redux/setup/reducers/index.ts)

# import and user your store

import the [store](https://github.com/integrables/integrables-react/blob/master/redux/setup/store/store.ts) into your applicatin

# Hook into your state

use the typed [UseAppSelector](https://github.com/integrables/integrables-react/blob/master/redux/setup/store/hooks.ts) to read the data from your redux store and [UseAppDispatch](https://github.com/integrables/integrables-react/blob/master/redux/setup/store/hooks.ts) to dispatch the actions across your application
