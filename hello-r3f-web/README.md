
prereqs

first,
uninstalled any old versions of npm, nvm and node

them installed these (NOT USING HOMEBREW)

nvm 
https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
ater making sure you have a ~/.zshrc file, run

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash


node and npm (together)
nvm install node

vite
see https://vite.dev/guide/
npm install vite
npm create vite@latest
    now follow the prompts to create project hello-3f-viewer
    typescript
    React
    typescript+react

cd hello-3f-viewer

react-three-fiber
npm install three @react-three/fiber    

react-three-drei
npm install @react-three/drei

see https://drei.docs.pmnd.rs/getting-started/introduction

tailwind and daisyui
see https://daisyui.com/docs/install/vite/?lang=en
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest


Add Tailwind CSS to Vite config

vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
Put Tailwind CSS and daisyUI in your CSS file (and remove old styles)

src/style.css
@import "tailwindcss";
@plugin "daisyui";


tailwind css intellisense 
see https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
do it from the left panel in VSCode, not how they say
and then change files.associations in VSCode (per workspace) (you can do it from Settings)
"files.associations": {
  "*.css": "tailwindcss"
}


and replace the contents of index.css with the 2 lines from daisy, not "style.css" like they say in the daisy intro

vitest

https://vitest.dev/guide/

npm install -D vitest

Next, in order to execute the test, add the following section to your package.json:

package.json

{
  "scripts": {
    "test": "vitest"
  }
}

add some test files (any files with .test. in the name)

npm run test

BTW didn't bother with vitest explorer or any other vitest-related extension to VSCode. Bad reviews!

Trying bruno....

brew install bruno

Looks good. Note you need to use "configure" to edit variables. Note that you need the protocol in the URL, e.g. http://localhost:3000 not localhost:3000














