# Zed React Snippets

![Extension Installation Count](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.zed.dev%2Fextensions%2Freact-snippets-es7&query=%24.data%5B%3A1%5D.download_count&style=for-the-badge&label=INSTALLS&color=green)

This Zed extension provides converted snippets from the popular  ["ES7+ React/Redux/React-Native snippets"](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) VSCode extension.

[Available Snippets](https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)

## Installation
You can download the extension from the Zed extension store. Just search for `react-snippets-es7` and click install.

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
