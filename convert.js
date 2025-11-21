// Converts snippets from the popular "ES7+ React/Redux/React-Native snippets" VSCode extension into Zed editor format
// Original VSCode extension: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
// Original GitHub repository: https://github.com/r5n-labs/vscode-react-javascript-snippets

/*
VSCode format
"exportType": {
  "body": ["export type ${1:first} = {${2:second}}"],
  "key": "exportType",
  "prefix": "exptp",
  "scope": "typescript,typescriptreact,javascript,javascriptreact"
}

Zed format
"exportType": {
  "prefix": "exptp",
  "description": "exportType",
  "body": ["export type ${1:first} = {${2:second}}"]
}
*/

import fs from "fs";

const url =
  "https://raw.githubusercontent.com/r5n-labs/vscode-react-javascript-snippets/refs/heads/master/src/snippets/generated.json";

// for some reason, only one snippet can be added
const outputFile = "snippets/tsx.json";

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  const vscodeSnippets = await res.json();

  const zedSnippets = {};

  for (const [name, snippet] of Object.entries(vscodeSnippets)) {
    const body = snippet.body.map((line) =>
      // there is no placeholder for filename in zed afaik
      line.replace("${TM_FILENAME_BASE}", "ComponentName"),
    );

    zedSnippets[name] = {
      prefix: snippet.prefix,
      description: snippet.description || name,
      body: body,
    };
  }

  fs.writeFileSync(outputFile, JSON.stringify(zedSnippets, null, 2));
  console.log(`Converted snippets written to ${outputFile}`);
} catch (err) {
  console.error("Error:", err);
}
