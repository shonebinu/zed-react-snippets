# Zed React Snippets

This Zed extension provides converted snippets from the popular  ["ES7+ React/Redux/React-Native snippets"](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) VSCode extension.

[Available Snippets](https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)

## Installation
1. Clone this repository.
2. Open the Extensions tab in Zed (`Ctrl + Shift + X`).
3. Click **Install Dev Extension** and select the cloned repo.xtensions tab in Zed (`Ctr + Shift + X) -> Click on "Install Dev Extension" -> Select the cloned repo.


## Usage
Snippets currently work in `.tsx` files. 
For example, typing `rfc` expands into:

```tsx
import React from 'react'

export default function ComponentName() {
  return (
    <div>first</div>
  )
}
```

Support for `.ts`, `.jsx`, and `.js` files is planned. I haven't figured out a way to make snippets work on multiple file type yet. — contributions are welcome!

## Contributing
Pull requests are welcome! If you'd like to help extend file support or add new snippets, please open an issue or submit a PR.

This repo includes a `convert.js` script that fetches the snippets from the original [VSCode extension's Github repo](https://github.com/r5n-labs/vscode-react-javascript-snippets) and generates `snippets/tsx.json` for Zed. 

## License
MIT
