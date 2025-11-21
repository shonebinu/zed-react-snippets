# Zed React Snippets

This Zed extension converts snippets from the popular ["ES7+ React/Redux/React-Native snippets"](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) VSCode extension into Zed editor format.

This repo contains a `convert.js` script which fetches the VSCode extension snippets and populate `snippets/tsx.json` with Zed formatted snippets.

[Available Snippets](https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/master/docs/Snippets.md)

Right now all the snippets will work in `.tsx` files. I haven't figured out a way to make it work on `.ts`, `.jsx`, `.js` yet.
